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

export default class MainToppage extends React.Component{
  state = {
    isMounted: false,
    series: [],
  }

  getSeries=()=>{
    API.getSeries()
    .then(response=>{
      this.setState({
        isMounted: true,
        series: response.series
      });
    })
    .catch(err=>{
      console.error('API.getSeries error');
    })
  }

  componentDidMount(){
    this.getSeries();
  }

  render(){
    const series = this.state.series;
    let series_list = [];

    for(let i in series){
      series_list.push(
        <Link to={'/blog/series/' + series[i].id} key={i}>
          <ListItem button>
            <ListItemIcon>
              <TouchApp/>
            </ListItemIcon>
            <ListItemText primary={series[i].title} />
          </ListItem>
        </Link>
      );
    }

    if(this.state.isMounted && series.length === 0){
      series_list.push(
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
        <h2>{I18N.seriesList}</h2>
        <List component="nav">
          {series_list}
        </List>
      </Card>
    );
  }
}