import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withStore} from '../common/store';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Translate from '@material-ui/icons/Translate';
import Fab from '@material-ui/core/Fab';

import I18N from '../common/I18N';
import API from '../common/API';
import Util from '../common/Util';

class ClassAppBar extends React.PureComponent {

  changeLanguage=()=>{
    let language = window.localStorage.getItem('language');
    window.localStorage.removeItem('language');

    if(language === 'ja' || !language){
      window.localStorage.language = 'en';
    }else{
      window.localStorage.language = 'ja';
    }

    window.location.href = window.location.href;
  }

  render(){
    const {store} = this.props;
    const backgroundImg = store.get('backgroundImg');
    const title = store.get('toppage').title;

    const mobile = window.sessionStorage.getItem('mobile');
    const marquee = mobile? 'marquee': '';

    return(
      <AppBar position="static" className={backgroundImg}>
        <Toolbar variant="dense">
          <div className={marquee}
            style={{flexGrow: 1}} //後ろの要素を右端に寄せる
          >
            <Typography
              // variant="title"
              variant="h1"
              color="inherit"
              className='Title'
            >
              {title}
            </Typography>
          </div>
          <Fab
            variant="extended"
            onClick={this.changeLanguage}
            hrefLang={window.localStorage.getItem('language') === "en"? "ja": "en"}
          >
            <Translate/>
            {I18N.EnglishButton}
          </Fab>
        </Toolbar>
      </AppBar>
    );
  }
}

ClassAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
};

export default withStyles(styles)(withStore(ClassAppBar));

/*

<Link to="/blog/"
  onClick={this.titleClick}
  className={marquee}
  style={{flexGrow: 1}} //後ろの要素を右端に寄せる
>
  <Typography
    variant="title"
    color="inherit"
    className="Title"
  >
    DumblePy
  </Typography>
</Link>

 */