import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MetaTags from 'react-meta-tags';

import Card from '@material-ui/core/Card';

import API from '../../common/API';
import Util from '../../common/Util';

export default class MainToppage extends React.Component{

  state = {
    title: '',
    toppage: null,
    description: ''
  }

  getToppage=()=>{
    API.toppage()
    .then(response=>{
      this.setState({
        title: response.toppage.title,
        toppage: response.toppage.article_html,
        description: response.toppage.meta_description
      });
    })
    .catch(err=>{
      console.error('API.toppage error');
    })
  }

  componentDidMount(){
    this.getToppage();
  }

  componentDidUpdate(nextProps){
    Util.twitter();
  }

  render(){
    const toppage = this.state.toppage;
    return (
      <div>
        <Card
          className={this.props.appProps.classes.main}
          raised={true}
        >
          <div className="twitterDiv">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-size="large"
              data-text={this.state.title}
              data-via="dumblepytech1"
              data-show-count="false"
            >
              tweet
            </a>
          </div>
          <div
            dangerouslySetInnerHTML={
              {__html: toppage} }
          />
        </Card>
        <MetaTags>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
        </MetaTags>
      </div>
    );
  }
}