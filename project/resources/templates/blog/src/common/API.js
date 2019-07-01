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
      url = '/api/blog/toppage?language=en';
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
      url = '/api/blog/series?language=en';
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getArticles=(series_id)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = `/api/blog/articles/${series_id}`;
    }else{
      url = `/api/blog/articles/${series_id}?language=en`;
    }

    return Util.getAPIWithoutCache(url);
    //return Util.getAPI(url);
  }


  static getArticle=(timestamp)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = `/api/blog/article/${timestamp}`;
    }else{
      url = `/api/blog/article/${timestamp}?language=en`;
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
      url = '/api/blog/diaries?language=en';
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
      url = '/api/blog/articlesByKeyword?language=en?keyword=' + keyword;
    }

    return Util.getAPI(url);
  }


  static getArticlesByTagId=(tagId)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/articlesByTagId/' + tagId;
    }else{
      url = '/api/blog/articlesByTagId?language=en/' + tagId;
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
      url = '/api/blog/latests?language=en'
    }

    return Util.getAPI(url);
  }


  static getAllArticles=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/api/blog/allArticles'
    }else{
      url = '/api/blog/allArticles?language=en'
    }

    return Util.getAPI(url);
  }
}
