/*eslint linebreak-style: ["error", "windows"]*/
/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

//Rendering react client side from server which increases the perfomance
import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import DataApi from './state-api';
import App from './components/App';
import config from './config';

const serverRender = async() => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };
  return { initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData}/>), initialData };
};

export default serverRender;
