import { contructQuery } from './sourcesActions';

test('contructs a yql query', () => {
  expect(contructQuery('https://davidpaulsson.se/')).toBe(
    'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D%22https%3A%2F%2Fdavidpaulsson.se%2F%22&format=json'
  );
});
