import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MetaTags from 'react-meta-tags';

import Card from '@material-ui/core/Card';

import Util from '../../common/Util';
import {withStore} from '../../common/store';

class MainToppage extends PureComponent{

  componentDidMount(){
    Util.twitter();
  }

  componentDidUpdate(nextProps){
    if(this.props != nextProps){
      Util.twitter();
    }
  }

  render(){
    const {store} = this.props;
    const title = store.get('toppage').title;
    const article = store.get('toppage').article;
    const description = store.get('toppage').description;
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
              data-text={title}
              data-via="dumblepytech1"
              data-show-count="false"
            >
              tweet
            </a>
          </div>
          <div
            dangerouslySetInnerHTML={
              {__html: article}
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

}

export default withStyles(styles)(withStore(MainToppage));