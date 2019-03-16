import React, { Component, PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import ClassAppBar from './components/Appbar';
import ClassTabs from './components/Tabs';
import ClassMain from './components/Main';

//React.jsのメソッドが呼ばれる順番
//https://qiita.com/kwst/items/b1f36d0a384eab1bc284
//https://qiita.com/yukika/items/1859743921a10d7e3e6b
//https://qiita.com/koba04/items/66e9c5be8f2e31f28461


class App extends PureComponent {

  checkMobile=()=>{
    window.sessionStorage.removeItem('mobile');

    if (document.body.clientWidth < 800) {
      window.sessionStorage.mobile = true;
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


// const App =()=>{
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <ClassAppBar />
//         <ClassTabs />
//         <ClassMain />
//       </div>
//     </BrowserRouter>
//   );
// }


export default App;