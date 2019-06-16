import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Link from 'react-router-dom/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TouchApp from '@material-ui/icons/TouchApp';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import API from '../../common/API';
import I18N from '../../common/I18N';

export default class MainSearch extends React.Component{
  state = {
    isMounted: false,
    searchWord: '',
    articles: [],
  }

  getArticlesByKeyword=(searchWord)=>{
    if(searchWord.length > 0){
      API.getArticlesByKeyword(searchWord)
      .then(response=>{
        this.setState({
          isMounted: true,
          searchWord: response.keyword,
          articles: response.articles
        });
      })
      .catch(err=>{
        console.error('API.getArticlesByKeyword() error');
      })
    }
  }

  getArticlesByTagId=(tagId)=>{
    API.getArticlesByTagId(tagId)
    .then(response=>{
      this.setState({
        isMounted: true,
        searchWord: response.tag.tag,
        articles: response.articles
      });
    })
    .catch(err=>{
      console.error('API.getArticlesByTagId() error');
    })
  }

  search=()=>{
    const isWord = window.location.search.slice(1).match(/word/)? true: false;
    const isTag = window.location.search.slice(1).match(/tag/)? true: false;

    if(isWord){
      let searchWord = window.location.search.slice(1).match(/word/).input.split('=')[1];
      searchWord = decodeURIComponent(searchWord);
      this.getArticlesByKeyword(searchWord);
    }else if(isTag){
      const tagId = window.location.search.slice(1).match(/tag/).input.split('=')[1];
      this.getArticlesByTagId(tagId);
    }
  }

  componentDidMount(){
    this.search();
  }

  componentDidUpdate(nextProps){
    if(this.props !== nextProps){
      this.search();
    }
  }

  render(){

    let header = '';
    if(this.state.searchWord){

      const isWord = window.location.search.slice(1).match(/word/)? true: false;
      const isTag = window.location.search.slice(1).match(/tag/)? true: false;
      let title = '';

      if(isWord){
        title = '"' + this.state.searchWord + I18N.searchResultOf;
        if(window.localStorage.getItem('language') === 'en'){
          title = I18N.searchResultOf + '"' + this.state.searchWord + '"';
        }
      }else if(isTag){
        title = I18N.searchResultTag + this.state.searchWord + I18N.searchResultOf;
        if(window.localStorage.getItem('language') === 'en'){
          title = I18N.searchResultOf + I18N.searchResultTag + this.state.searchWord;
        }
      }

      header = (
        <CardHeader
          title={title}
        />
      );
    }

    let articles_list = [];
    const articles = this.state.articles;
    for(let i in articles){
      articles_list.push(
        <Link to={'/blog/search/' + articles[i].timestamp} key={i}>
          <ListItem button>
            <ListItemIcon>
              <TouchApp/>
            </ListItemIcon>
            <ListItemText primary={articles[i].title} />
          </ListItem>
        </Link>
      );
    }

    if(this.state.isMounted && articles_list.length === 0){
      articles_list.push(
        <ListItem>
          <ListItemText primary={I18N.articlesNotFound} />
        </ListItem>
      );
    }

    return (
      <Card
        className={this.props.appProps.classes.main}
        raised={true}
      >
        <SearchInput searchWord={this.state.searchWord}/>
        {header}
        <List component="nav">
          {articles_list}
        </List>
      </Card>
    );
  }
}

class SearchInput extends React.Component{
  state = {
    searchWord: ''
  }

  searchWord=()=>{
    let searchWord = document.getElementById('searchWord').value;
    this.setState({searchWord: searchWord});
  }

  render(){
    const linkToSearch = "?word=" + this.state.searchWord;

    return(
      <div>
        <TextField
          id="searchWord"
          style={{width: '80vw'}}
          label={I18N.drawerSearchLabel}
          onChange={this.searchWord}
        />
        <Link
          to={{
            pathname: "/blog/search/",
            search: linkToSearch
          }}
        >
          <Button
            variant="contained"
          >
            <Search/>
            {I18N.drawerSearchButton}
          </Button>
        </Link>
      </div>
    );
  }
}
