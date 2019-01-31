import React from 'react';
import axios from 'axios';
import CONST from './Const';

export default class Util extends React.Component{
  static method1 = (arg1, arg2) => {
    return arg1 + arg2;
  }

  static getAPI=(url)=>{
    url = CONST.APIHOST + url;
    const val = sessionStorage.getItem(url);

    if(val){
      return new Promise(function(resolve, reject) {
        resolve(JSON.parse(val));
      });
    }else{
      return axios
        .get(url, CONST.APIMODE)
        .then(response=>{
          if(response.data.value === undefined){
            //window.location.href = '/blog/';
          }else{
            sessionStorage.setItem(url, JSON.stringify(response.data.value));
            return response.data.value;
          }
        })
        .catch(err=>{
          console.error(err);
        })
    }
  }

  static getAPIWithoutCache=(url)=>{
    url = CONST.APIHOST + url;

    return axios
      .get(url, CONST.APIMODE)
      .then(response=>{
        if(response.data.value === undefined){
          //window.location.href = '/blog/';
        }else{
          return response.data.value;
        }
      })
      .catch(err=>{
        console.error(err);
      })
  }

  static postAPI=(url)=>{
    url = CONST.APIHOST + url;
    return axios
      .get(url, CONST.APIMODE)
      .then(response=>{
        return response.data.value;
      })
      .catch(err=>{
        console.error(err);
      })
  }

  static twitter=()=>{
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }

  static highlight=()=>{
    if(document.getElementsByTagName('pre').length>0){
      if(window.hljs.initHighlighting.called){
        window.hljs.initHighlighting.called = false;
      }
      window.hljs.initHighlighting();
    }
  }

  static getBackgroundImg=()=>{
    let backgroundImg = window.location.pathname.split('/')[2];
    if(!backgroundImg){
      backgroundImg = 'plain';
    }
    return backgroundImg;
  }
}