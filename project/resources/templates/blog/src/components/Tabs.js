import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Link from 'react-router-dom/Link';
import {Link} from 'react-router-dom';

import {withStore} from '../common/store';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TouchApp from '@material-ui/icons/TouchApp';

import I18N from '../common/I18N';
import Util from '../common/Util';

const ClassTabs=(props)=>{

  const setBackgroundImg=(e)=>{
    const backgroundImg = e.currentTarget.dataset.backgroundimg;
    props.store.set('backgroundImg')(backgroundImg);
  }

  const { classes, store } = props;
  const backgroundImg = store.get('backgroundImg');

  return (
    <AppBar position="static" className={backgroundImg}>
      <Tabs
        value={false}
        variant="scrollable"
        scrollButtons="auto"
        className="Tabs"
        //fullWidth
      >
        <Button
          component={Link} to="/blog/" disabled={backgroundImg === 'plain'? true: false} className={[classes.toppage, 'TabBlack']}
          data-backgroundimg="plain"
          onClick={setBackgroundImg}
        >
          <TouchApp/>
          {I18N.toppageTab}
        </Button>
        <Button
          component={Link} to="/blog/series/" disabled={backgroundImg === 'series'? true: false} className={[classes.series, 'TabWhite']}
          data-backgroundimg="series"
          onClick={setBackgroundImg}
        >
          <TouchApp/>
          {I18N.seriesTab}
        </Button>
        <Button
          component={Link} to="/blog/diary/" disabled={backgroundImg === 'diary'? true: false} className={[classes.diary, 'TabBlack']}
          data-backgroundimg="diary"
          onClick={setBackgroundImg}
        >
          <TouchApp/>
          {I18N.diariesTab}
        </Button>
        <Button
          component={Link} to="/blog/search/" disabled={backgroundImg === 'search'? true: false} className={[classes.search, 'TabWhite']}
          data-backgroundimg="search"
          onClick={setBackgroundImg}
        >
          <TouchApp/>
          {I18N.searchTab}
        </Button>
        <Button
          component={Link} to="/blog/products/" disabled={backgroundImg === 'products'? true: false} className={[classes.products, 'TabWhite']}
          data-backgroundimg="products"
          onClick={setBackgroundImg}
        >
          <TouchApp/>
          {I18N.productsTab}
        </Button>
      </Tabs>
    </AppBar>
  );
}

const styles = {
  toppage: {
    backgroundColor: '#ccc !important'
  },
  series: {
    backgroundColor: '#f33 !important'
  },
  diary: {
    backgroundColor: 'orange !important'
  },
  search: {
    backgroundColor: 'green !important'
  },
  products: {
    backgroundColor: '#33f !important'
  },
}

export default withStyles(styles)(withStore(ClassTabs));
