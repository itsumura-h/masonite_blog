import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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



class ClassMain extends React.Component {

  render(){
    const backgroundImg = Util.getBackgroundImg();

    return(
      <Card className={backgroundImg}>
        <Switch>
          <Route exact path="/blog/"
            render={props=>(
              <MainToppge
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/series/"
            render={props=>(
              <MainSeries
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/series/:series_id"
            render={props=>(
              <MainArticles
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/series/:series_id/:article_id"
            render={props=>(
              <MainArticle
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/diary/"
            render={props=>(
              <MainDiary
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/diary/:article_id"
            render={props=>(
              <MainArticle
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route exact path="/blog/search/:article_id"
            render={props=>(
              <MainArticle
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route path="/blog/search/"
            render={props=>(
              <MainSearch
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route path="/blog/products/"
            render={props=>(
              <MainProducts
                routeProps={props}
                appProps={this.props}
              />
            )}
          />
          <Route>
            <Redirect to="/blog"/>
          </Route>
        </Switch>
      </Card>
    );
  }
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

export default withStyles(styles)(ClassMain);
