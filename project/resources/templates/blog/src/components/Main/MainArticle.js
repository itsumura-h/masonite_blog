import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MetaTags from 'react-meta-tags';
// import Link from 'react-router-dom/Link';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';

import API from '../../common/API';
import Util from '../../common/Util';

class MainArticle extends PureComponent{
  state = {
    article: null,
    tags: [],
  }

  getArticle=()=>{
    let timestamp;
    const tab = window.location.pathname.split('/')[2];
    if(tab === 'series'){
      timestamp = window.location.pathname.split('/')[4];
    }else if(tab === 'diary' || tab === 'search'){
      timestamp = window.location.pathname.split('/')[3];
    }

    API.getArticle(timestamp)
    .then(response=>{
      this.setState({
        article: response.article,
        tags: response.tags
      });
    })
    .catch(err=>{
      console.error('API.getArticle error');
    })
  }

  componentDidMount(){
    this.getArticle();
    Util.highlight();
  }

  componentDidUpdate(){
    Util.twitter();
    Util.highlight();
  }

  render(){
    const { classes } = this.props;
    const article_html = this.state.article? this.state.article.article_html: '';
    const title = this.state.article? this.state.article.title: '';
    const description = this.state.article? this.state.article.meta_description: '';
    const posted_on = this.state.article? this.state.article.posted_on: '';
    const posted_on_new = new Date(posted_on).toDateString();
    let updated_on = this.state.article? this.state.article.updated_on: '';
    updated_on = new Date(updated_on).toDateString();
    const tags = this.state.tags? this.state.tags: [];

    return (
      <div>
        <Card
          className={this.props.appProps.classes.main}
          raised={true}
        >
          {/* {header} */}
          <CardHeader
            title={title}
            subheader={'posted on:' + posted_on_new + ' , updated on:' + updated_on}
          />

          {/* {twitter} */}
          <div className="twitterDiv">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-size="large"
              data-text={title}
              data-via="dumblepytech1"
              data-show-count="false"
            >
              tweet
            </a>
          </div>

          <div className={classes.tagsMargin}>
            { // タグ
              tags.map((tag, i)=>{
                return (
                  <Link
                    key={i}
                    to={"/blog/search/?tag=" + tag.id}
                  >
                    <Chip
                      label={tag.tag}
                      clickable
                    />
                  </Link>
                );
              })
            }
          </div>
          <div
            dangerouslySetInnerHTML={
              {__html: article_html}
            }
          />
        </Card>
        <MetaTags>
          <title>{title}</title>
          <meta name="description" content={description} />
        </MetaTags>
      </div>
    );
  }
}

const styles = {
  tagsMargin: {
    margin: '10px'
  }
}

export default withStyles(styles)(MainArticle);