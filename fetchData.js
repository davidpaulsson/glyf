const fs = require('fs');
const axios = require('axios');
const orderBy = require('lodash.orderby');

const moment = require('moment');

const Parser = require('rss-parser');
const parser = new Parser();

const sanitizeHtml = require('sanitize-html');
const removeMd = require('remove-markdown');

const sources = [
  {
    title: 'Github',
    domain: 'github.com',
    api: 'https://github-trending-api.now.sh',
  },
  {
    title: 'Product Hunt',
    domain: 'producthunt.com',
    api: 'https://www.producthunt.com/feed',
  },
  {
    title: 'Designer News',
    domain: 'designernews.co',
    api: 'https://www.designernews.co/?format=rss',
  },
];

const data = {
  updatedAt: moment().toDate(),
  sources: [],
};

const sortByDate = (array) => orderBy(array, 'sortDate', 'desc');

const stripHtml = (str) =>
  !!str
    ? removeMd(
        sanitizeHtml(str.length && str[0] === '“' ? str.slice(1) : str, {
          allowedTags: [],
        }).trim()
      )
    : null;

const fixTitle = (str) => (!!str ? str.replace(/ *\([^)]*\) */g, '') : null);

const extractImageUri = (item) => {
  if (item.content) {
    return item.content.url;
  }

  if (!item.description) {
    return null;
  }

  const img = sanitizeHtml(item.description, {
    allowedTags: ['img'],
    allowedAttributes: {
      img: ['src'],
    },
    textFilter() {
      return '';
    },
  });

  const re = /"(.*?[^\\])"/;
  return re.exec(img) &&
    re.exec(img)[1] !== 'https://static.breakit.se/article/default.png'
    ? re.exec(img)[1]
    : null;
};

const truncateString = (str) => {
  const num = 150;
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '…';
};

const normalize = ({ title, data }) => {
  switch (title) {
    case 'Github':
      return data.map((d) => ({
        title: fixTitle(d.name),
        url: d.url,
        preamble: truncateString(stripHtml(d.description)),
        language: d.language,
        stars: d.stars,
        author: d.author,
        github: true,
      }));
    default:
      return data.map((d) => ({
        title: fixTitle(d.title),
        url: d.link,
        preamble: truncateString(stripHtml(d.content)),
        published: moment(d.pubDate).calendar(),
        sortDate: moment(d.pubDate).toDate(),
        image: d.enclosure ? d.enclosure.url : extractImageUri(d),
        description: d.content
          ? removeMd(
              sanitizeHtml(d.content, {
                allowedTags: [],
              }).trim()
            )
          : null,
      }));
  }
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const start = async () => {
  await asyncForEach(sources, async ({ title, domain, api }) => {
    if (title === 'Github') {
      const resp = await axios.get(api);
      data.sources.push({
        title,
        domain,
        items: normalize({ title, data: resp.data }),
      });
    } else {
      const resp = await parser.parseURL(api);
      data.sources.push({
        title,
        domain,
        items: sortByDate(normalize({ title, data: resp.items })),
      });
    }
  });

  fs.writeFile('./public/data.json', JSON.stringify(data), function (
    err,
    result
  ) {
    if (err) {
      console.log('error', err);
    } else {
      console.log('Done!');
    }
  });
};

start();
