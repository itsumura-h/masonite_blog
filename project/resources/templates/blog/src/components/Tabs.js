import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TouchApp from '@material-ui/icons/TouchApp';

import I18N from '../common/I18N';
import Util from '../common/Util';

class ClassTabs extends React.Component {
  render() {
    const { classes } = this.props;

    const backgroundImg = Util.getBackgroundImg();
    const pathname = window.location.pathname;

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
            component={Link} to="/blog/" disabled={pathname === '/blog/'? true: false} className={classes.toppage + ' TabBlack'}
          >
            <TouchApp/>
            {I18N.toppageTab}
          </Button>
          <Button
            component={Link} to="/blog/series/" disabled={pathname === '/blog/series/'? true: false} className={classes.series + ' TabWhite'}
          >
            <TouchApp/>
            {I18N.seriesTab}
          </Button>
          <Button component={Link} to="/blog/diary/" disabled={pathname === '/blog/diary/'? true: false} className={classes.diary + ' TabBlack'}>
            <TouchApp/>
            {I18N.diariesTab}
          </Button>
          <Button component={Link} to="/blog/search/" disabled={pathname === '/blog/search/'? true: false} className={classes.search + ' TabWhite'}>
            <TouchApp/>
            {I18N.searchTab}
          </Button>
          {/* <Button component={Link} to="/blog/products/" disabled={pathname === '/blog/products/'? true: false} className={classes.products + ' TabWhite'}>
            <TouchApp/>
            {I18N.productsTab}
          </Button> */}
        </Tabs>
      </AppBar>
    );
  }
}

ClassTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

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
    backgroundColor: 'blue !important'
  }
}

export default withStyles(styles)(ClassTabs);

/*

linkClick=(e)=>{
  const data_tab = e.currentTarget.getAttribute('data-tab');
}

<Link to="/blog/series/" onClick={this.linkClick} data-tab="series">
  <Tab label={I18N.seriesTab} className={classes.series + ' Tab'} icon={<TouchApp/>}/>
</Link>
<Link to="/blog/diary/" onClick={this.linkClick} data-tab="diary">
  <Tab label={I18N.diariesTab} className={classes.diary + ' Tab'} icon={<TouchApp/>}/>
</Link>
<Link to="/blog/search/" onClick={this.linkClick} data-tab="search">
  <Tab label={I18N.searchTab} className={classes.search + ' Tab'} icon={<TouchApp/>}/>
</Link>



toppage: {
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: '#eee',
    }
  },
  series: {
    backgroundColor: '#f33',
    '&:hover': {
      backgroundColor: '#f88',
    },
  },
  diary: {
    backgroundColor: 'orange',
    '&:hover': {
      backgroundColor: '#fc8',
    },
  },
  all: {
    backgroundColor: '#33f',
  },
  search: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#6b6',
    },
  },
  management: {
    backgroundColor: 'purple',
  },
  noteeee: {
    backgroundColor: '#333',
  }

*/