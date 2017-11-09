/*eslint linebreak-style: ["error", "windows"]*/

/*eslint no-mixed-spaces-and-tabs: "error"*/

/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

import DataApi from '../state-api';
import {data} from '../testData.json';

const api=new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles=api.getArticles();
    //console.log(articles);
    const articleId=data.articles[0].id;
    const artileTitle=data.articles[0].title;
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(artileTitle);
  });

  it('exposes authors as an object', () => {
    const authors=api.getAuthors();
    //console.log(authors);
    const authorId=data.authors[0].id;
    const authorFirstName=data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });

});
