import { connect, createStore } from 'undux'

const backgroundImg = window.location.pathname.split('/')[2];

const store = createStore({
  backgroundImg: backgroundImg? backgroundImg: 'plain',
  isMobile: false,
  // toppage
  toppage: {title: '', toppage: '', description: ''},
});

export const withStore = connect(store);
