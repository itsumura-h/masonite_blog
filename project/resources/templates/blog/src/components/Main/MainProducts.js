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

export default class MainProducts extends PureComponent{

  vocabulary=()=>{
    window.location.href = '/products/vocabulary';
  }

  render(){
    return (
      <Card
        className={this.props.appProps.classes.main}
        raised={true}
      >
        <h2>{I18N.productsList}</h2>
        <List component="nav">
          {/* <Link to='/products/vocabulary' key={0}> */}
            <ListItem button onClick={this.vocabulary}>
              <ListItemIcon>
                <TouchApp/>
              </ListItemIcon>
              <ListItemText primary='英単語' />
            </ListItem>
          {/* </Link> */}
        </List>
      </Card>
    );
  }
}