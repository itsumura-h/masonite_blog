import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Link from 'react-router-dom/Link';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TouchApp from '@material-ui/icons/TouchApp';

import API from '../../common/API';
import I18N from '../../common/I18N';

export default class MainSeriesArcive extends React.Component{
  state = {
    isMounted: false,
    series: null,
    articles: [],
  }

  getArticles=()=>{
    const series_id = window.location.pathname.split('/')[3];
    API.getArticles(series_id)
    .then(response=>{
      this.setState({
        series: response.series,
        articles: response.articles
      });
    })
    .catch(err=>{
      console.error('API.getArticles error');
    })
  }

  componentDidMount(){
    this.getArticles();
  }

  render(){
    const articles = this.state.articles;
    const series = this.state.series;
    let articles_list = [];

    for(let i in articles){
      articles_list.push(
        <Link to={'/blog/series/' + series.id + '/' + articles[i].timestamp} key={i}>
          <ListItem button>
            <ListItemIcon>
              <TouchApp/>
            </ListItemIcon>
            <ListItemText primary={articles[i].title} />
          </ListItem>
        </Link>
      );
    }

    let title = '';
    if(this.state.series){
      title = series.title + I18N.articlesOf
      if(window.localStorage.getItem('language') === 'en'){
        title = I18N.articlesOf + '"' + series.title + '"';
      }
    }

    return (
      <Card
        className={this.props.appProps.classes.main}
        raised={true}
      >
        <h2>{title}</h2>
        <List component="nav">
          {articles_list}
        </List>
      </Card>
    );
  }
}