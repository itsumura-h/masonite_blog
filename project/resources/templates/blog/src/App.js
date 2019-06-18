import React, { Component, PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStore  } from './common/store';

//import logo from './logo.svg';
import './App.css';
import ClassAppBar from './components/Appbar';
import ClassTabs from './components/Tabs';
import ClassMain from './components/Main';

import API from './common/API';

// React.jsのメソッドが呼ばれる順番
// https://qiita.com/kwst/items/b1f36d0a384eab1bc284
// https://qiita.com/yukika/items/1859743921a10d7e3e6b
// https://qiita.com/koba04/items/66e9c5be8f2e31f28461

class App extends Component {

  checkMobile=()=>{
    if(document.body.clientWidth < 800){
      this.props.store.set('isMobile')(true);
    }
  }

  getToppage=()=>{
    if(this.props.store.state.toppage){
      API.getToppage()
      .then(response=>{
        this.props.store.set('toppage')(
          {
            title: response.toppage.title,
            article: response.toppage.article_html,
            description: response.toppage.meta_description,
          }
        );
      })
      .catch(err=>{
        console.error('API.getToppage error');
      })
    }
  }

  //_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

  componentDidMount() {
    //ルートアクセスでリダイレクト
    // if(window.location.pathname === '/'){
    //   window.location.href = '/blog/';
    // }

    //スマホorPC
    this.checkMobile();
    this.getToppage();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ClassAppBar />
          <ClassTabs />
          <ClassMain />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStore(App);