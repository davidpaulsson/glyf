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

export const defaultSerializer = json =>
  sortByDate(
    json.items.map(item => {
      return {
        link: item.link,
        published: moment(item.pubDate).calendar(),
        sortDate: moment(item.pubDate).toDate(),
        title: item.title.replace(/ *\([^)]*\) */g, ''),
        category: item.category,
        image: item.enclosure ? item.enclosure.url : extractImageUri(item),
        description: item.content
          ? removeMd(
              sanitizeHtml(item.content, {
                allowedTags: [],
              }).trim()
            )
          : null,
      };
    })
  );
