import React from 'react';
//import CONST from './Const';
import Util from './Util';

export default class API extends React.Component{
  static getToppage=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getToppage';
    }else{
      url = '/blog/api/getToppage_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getSeries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getSeries';
    }else{
      url = '/blog/api/getSeries_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticles=(series_id)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getArticles/' + series_id;
    }else{
      url = '/blog/api/getArticles_en/' + series_id;
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticle=(timestamp)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getArticle/' + timestamp;
    }else{
      url = '/blog/api/getArticle_en/' + timestamp;
    }

    return Util.getAPIWithoutCache(url);
  }


  static getDiaries=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getDiaries';
    }else{
      url = '/blog/api/getDiaries_en';
    }

    return Util.getAPIWithoutCache(url);
  }


  static getArticlesByKeyword=(keyword)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getArticlesByKeyword?keyword=' + keyword;
    }else{
      url = '/blog/api/getArticlesByKeyword_en?keyword=' + keyword;
    }

    return Util.getAPI(url);
  }


  static getArticlesByTagId=(tagId)=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getArticlesByTagId/' + tagId;
    }else{
      url = '/blog/api/getArticlesByTagId_en/' + tagId;
    }

    return Util.getAPI(url);
  }

  //_/_/_/_/_/_/_/_/_/  以下未使用  /_/_/_/_/_/_/_/_/_/_/_/_/_/

  static getLatests=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getLatests'
    }else{
      url = '/blog/api/getLatests_en'
    }

    return Util.getAPI(url);
  }


  static getAllArticles=()=>{
    const language = window.localStorage.getItem('language');
    let url;

    if(language === 'ja' || !language){
      url = '/blog/api/getAllArticles'
    }else{
      url = '/blog/api/getAllArticles_en'
    }

    return Util.getAPI(url);
  }
}
