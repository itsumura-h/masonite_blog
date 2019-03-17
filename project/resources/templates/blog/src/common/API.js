import React from 'react';
//import CONST from './Const';
import Util from './Util';

export default class API extends React.Component{
  static getToppage=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/toppage';
    }else{
      url = '/api/blog/toppage_en';
    }

    //return Util.getAPIWithoutCache(url);
    return Util.getAPI(url);
  }


  static getSeries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/series';
    }else{
      url = '/api/blog/series_en';
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getArticles=(series_id)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/articles/' + series_id;
    }else{
      url = '/api/blog/articles_en/' + series_id;
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getArticle=(timestamp)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/article/' + timestamp;
    }else{
      url = '/api/blog/article_en/' + timestamp;
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getDiaries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/diaries';
    }else{
      url = '/api/blog/diaries_en';
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getArticlesByKeyword=(keyword)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/articlesByKeyword?keyword=' + keyword;
    }else{
      url = '/api/blog/articlesByKeyword_en?keyword=' + keyword;
    }

    return Util.getAPI(url);
  }


  static getArticlesByTagId=(tagId)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/articlesByTagId/' + tagId;
    }else{
      url = '/api/blog/articlesByTagId_en/' + tagId;
    }

    return Util.getAPI(url);
  }

  //_/_/_/_/_/_/_/_/_/  以下未使用  /_/_/_/_/_/_/_/_/_/_/_/_/_/

  static getLatests=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/latests'
    }else{
      url = '/api/blog/latests_en'
    }

    return Util.getAPI(url);
  }


  static getAllArticles=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/allArticles'
    }else{
      url = '/api/blog/allArticles_en'
    }

    return Util.getAPI(url);
  }
}
