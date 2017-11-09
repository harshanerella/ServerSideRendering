/*eslint linebreak-style: ["error", "windows"]*/
/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
import React from 'react';
//import axios from 'axios';
//import DataApi from '../state-api';
import ArticlesList from './ArticlesList';

export default class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  //fetch data async using axios
  /*  async componentDidMount() {
    console.log(this.props.initialData.articles);
    const resp = await axios.get('/data');
    console.log(resp);
    const api = new DataApi(resp.data);
    console.log(api);
    this.setState(() => ({articles: api.getArticles(), authors: api.getAuthors()}));
  } */

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  }

  render() {
    return (<ArticlesList articles={this.state.articles} articleActions={this.articleActions}/>);
  }
}
