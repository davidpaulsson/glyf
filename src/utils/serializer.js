import orderBy from 'lodash.orderby';
import moment from 'moment/moment';
import sanitizeHtml from 'sanitize-html';
import removeMd from 'remove-markdown';

const sortByDate = array => orderBy(array, 'sortDate', 'desc');

const extractImageUri = item => {
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

export const productHuntSerializer = json =>
  sortByDate(
    json.query.results.feed.entry.map(item => {
      const description =
        item.content && item.content.content
          ? removeMd(
              sanitizeHtml(item.content.content, {
                allowedTags: [],
              }).trim()
            )
          : null;
      return {
        link: item.link.href,
        published: moment(item.published).calendar(),
        sortDate: moment(item.published).toDate(),
        title: item.title, // item.title,
        image: null, // null,
        description: description
          .replace(
            `Discussion
        |
        Link`,
            ''
          )
          .replace('“', '')
          .replace(' ”', ''),
      };
    })
  );

export const ekotSerializer = json =>
  sortByDate(
    json.query.results.feed.entry.map(item => ({
      link: item.link.href,
      published: moment(item.published).calendar(),
      sortDate: moment(item.published).toDate(),
      title: item.title.content,
      category: item.category.term,
      image: null,
      description:
        item.summary && item.summary.content
          ? removeMd(
              sanitizeHtml(item.summary.content, {
                allowedTags: [],
              }).trim()
            )
          : null,
    }))
  );

export const hackerNewsSerializer = json =>
  sortByDate(
    json.query.results.rss.channel.item.map(item => ({
      link: item.link,
      published: moment(item.pubDate).calendar(),
      sortDate: moment(item.pubDate).toDate(),
      title: item.title.replace(/ *\([^)]*\) */g, ''),
      category: item.category,
      image: null,
      description: null,
    }))
  );

export const githubSerializer = json =>
  sortByDate(
    json.query.results.rss.channel.item.map(item => ({
      link: item.link,
      published: moment(item.pubDate).calendar(),
      sortDate: moment(item.pubDate).toDate(),
      title: item.title.replace(/ *\([^)]*\) */g, ''),
      category: item.category,
      image: item.enclosure ? item.enclosure.url : extractImageUri(item),
      description: item.description
        ? removeMd(
            sanitizeHtml(item.description, {
              allowedTags: [],
            }).trim()
          )
        : null,
    }))
  );

export const defaultSerializer = json =>
  sortByDate(
    json.query.results.rss.channel.item.map(item => {
      return {
        link: item.link,
        published: moment(item.pubDate).calendar(),
        sortDate: moment(item.pubDate).toDate(),
        title: item.title,
        category: item.category,
        image: item.enclosure ? item.enclosure.url : extractImageUri(item),
        description: item.description
          ? removeMd(
              sanitizeHtml(item.description, {
                allowedTags: [],
              }).trim()
            )
          : null,
      };
    })
  );
