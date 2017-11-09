/*eslint linebreak-style: ["error", "windows"]*/
/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
/*eslint indent: "error"*/
import React from 'react';
import Article from './Article';

const ArticlesList = (props) => {

  return (
    <div>{
      Object.values(props.articles).map((article) =>  < Article key={article.id} article = {article} actions = { props.articleActions} />)
    }
    </div>
  );
};

export default ArticlesList;
