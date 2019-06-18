import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withStore, StoreProps} from '../common/store';

import {Switch, Route, Redirect} from 'react-router-dom';

import Card from '@material-ui/core/Card';

import Util from '../common/Util';

import MainToppge from './Main/MainToppage';
import MainSeries from './Main/MainSeries';
import MainArticles from './Main/MainArticles';
import MainDiary from './Main/MainDiary';
import MainArticle from './Main/MainArticle';
import MainSearch from './Main/MainSearch';
import MainProducts from './Main/MainProducts';

const ClassMain=(props)=>{
  return(
    <Card className={props.store.get('backgroundImg')}>
      <Switch>
        <Route exact path="/blog/"
          render={routeProps=>(
            <MainToppge
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/series/"
          render={routeProps=>(
            <MainSeries
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/series/:series_id"
          render={routeProps=>(
            <MainArticles
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/series/:series_id/:article_id"
          render={routeProps=>(
            <MainArticle
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/diary/"
          render={routeProps=>(
            <MainDiary
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/diary/:article_id"
          render={routeProps=>(
            <MainArticle
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/search/:article_id"
          render={routeProps=>(
            <MainArticle
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/search/"
          render={routeProps=>(
            <MainSearch
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/blog/products/"
          render={routeProps=>(
            <MainProducts
              routeProps={routeProps}
              appProps={props}
            />
          )}
        />
        <Route exact path="/">
          <Redirect to="/blog/"/>
        </Route>
        <Route path="/blog/(.*)">
          <Redirect to="/blog/"/>
        </Route>
      </Switch>
    </Card>
  );
}

ClassMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  main: {
    width: "90%",
    minHeight: "85vh",
    backgroundColor: "rgba(255,255,255, 0.85)",
    margin: "auto",
    textShadow: "none",
    padding: "16px"
  }
};

export default withStyles(styles)(withStore(ClassMain));
