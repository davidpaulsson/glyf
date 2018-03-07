import orderBy from 'lodash.orderby';
import moment from 'moment/moment';
import 'moment/locale/sv';

const sortByDate = array => orderBy(array, 'sortDate', 'desc');

export const ekotSerializer = json =>
  sortByDate(
    json.query.results.feed.entry.map(item => ({
      title: item.title.content,
      link: item.link.href,
      published: moment(item.published).calendar(),
      sortDate: moment(item.published).toDate(),
    }))
  );

export const defaultSerializer = json =>
  sortByDate(
    json.query.results.rss.channel.item.map(item => ({
      title: item.title,
      link: item.link,
      published: moment(item.pubDate).calendar(),
      sortDate: moment(item.pubDate).toDate(),
      category: item.category,
    }))
  );
