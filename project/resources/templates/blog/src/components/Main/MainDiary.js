import React, {PureComponent} from 'react';
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

export default class MainDiary extends PureComponent{
  state = {
    isMounted: false,
    diaries: [],
  }

  getDiaries=()=>{
    API.getDiaries()
    .then(response=>{
      this.setState({
        isMounted: true,
        diaries: response.diaries
      });
    })
    .catch(err=>{
      console.error('API.getDiaries error');
    })
  }

  componentDidMount(){
    this.getDiaries();
  }

  render(){
    const diaries = this.state.diaries;
    let diaries_list = [];

    for(let i in diaries){
      diaries_list.push(
        <Link to={'/blog/diary/' + diaries[i].timestamp} key={i}>
          <ListItem button>
            <ListItemIcon>
              <TouchApp/>
            </ListItemIcon>
            <ListItemText primary={diaries[i].title} />
          </ListItem>
        </Link>
      );
    }

    if(this.state.isMounted && diaries.length === 0){
      diaries_list.push(
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
        <h2>{I18N.diariesList}</h2>
        <List component="nav">
          {diaries_list}
        </List>
      </Card>
    );
  }
}