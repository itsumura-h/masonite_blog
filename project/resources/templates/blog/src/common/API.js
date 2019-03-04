import React from 'react';
//import CONST from './Const';
import Util from './Util';

export default class API extends React.Component{
  static getToppage=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/toppage';
    }else{
      url = '/blog/api/toppage_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getSeries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/series';
    }else{
      url = '/blog/api/series_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticles=(series_id)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/articles/' + series_id;
    }else{
      url = '/blog/api/articles_en/' + series_id;
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticle=(timestamp)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/article/' + timestamp;
    }else{
      url = '/blog/api/article_en/' + timestamp;
    }

    return Util.getAPIWithoutCache(url);
  }


  static getDiaries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/diaries';
    }else{
      url = '/blog/api/diaries_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticlesByKeyword=(keyword)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/articlesByKeyword?keyword=' + keyword;
    }else{
      url = '/blog/api/articlesByKeyword_en?keyword=' + keyword;
    }

    return Util.getAPI(url);
  }


  static getArticlesByTagId=(tagId)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/articlesByTagId/' + tagId;
    }else{
      url = '/blog/api/articlesByTagId_en/' + tagId;
    }

    return Util.getAPI(url);
  }

  //_/_/_/_/_/_/_/_/_/  以下未使用  /_/_/_/_/_/_/_/_/_/_/_/_/_/

  static getLatests=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/latests'
    }else{
      url = '/blog/api/latests_en'
    }

    return Util.getAPI(url);
  }


  static getAllArticles=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/allArticles'
    }else{
      url = '/blog/api/allArticles_en'
    }

    return Util.getAPI(url);
  }
}
