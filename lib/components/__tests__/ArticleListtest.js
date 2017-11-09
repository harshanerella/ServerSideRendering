/*eslint linebreak-style: ["error", "windows"]*/
/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
import React from 'react';
import ArticlesList from '../ArticlesList'
import renderer from 'react-test-renderer';

describe('Articlelist renders correctly', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a'
      },
      b: {
        id: 'b'
      }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it('tree renders', () => {
    const tree = renderer.create(<ArticlesList {...testProps}/>).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });

});
