import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MetaTags from 'react-meta-tags';
import Link from 'react-router-dom/Link';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';

import API from '../../common/API';
import Util from '../../common/Util';

class MainArticle extends React.Component{
  state = {
    article: null,
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
      this.setState({article: response.article});
    })
    .catch(err=>{
      console.error(err);
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
    const tags = this.state.article? this.state.article.tags: [];

    let header = (
      <CardHeader
        title={title}
        subheader={'posted on:' + posted_on_new + ' , updated on:' + updated_on}
      />
    );

    let tag_chips = [];
    for(let tags_i in tags){
      let tag = tags[tags_i];
      tag_chips.push(
        <Link
          key={tags_i}
          to={"/blog/search/?tag=" + tag.id}
        >
          <Chip
            label={tag.tag}
            clickable
            //onClick={this.props.appProps.drawer_changeDrawerOpen}
          />
        </Link>
      );
    }

    const twitter = (
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
    );

    return (
      <div>
        <Card
          className={this.props.appProps.classes.main}
          raised={true}
        >
          {header}
          {twitter}
          <div className={classes.tagsMargin}>{tag_chips}</div>
          <div
            dangerouslySetInnerHTML={
              {__html: article_html} }
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