const ja = {
  EnglishButton: 'Translate',
  closeButtonName: '閉じる',
  latest20: '新着20件',
  seriesList: '連載一覧',
  articlesList: '記事一覧',
  diariesList: '雑記一覧',
  articlesOf: 'の記事一覧',
  articlesNotFound: '記事がありません',
  toppageTab: 'トップページ',
  seriesTab: '連載一覧',
  diariesTab: '雑記一覧',
  searchTab: '検索',
  productsTab: 'ツール',
  allTab: '全記事一覧',
  drawerSearchLabel: '検索ワード',
  drawerSearchButton: '検索',
  diariesWithClick: '雑記(クリックで開く)',
  searchResultOf: '"の検索結果',
  searchResultTag: 'タグ"',
  productsList: 'ツール一覧',
}

const en = {
  EnglishButton: '日本語へ',
  closeButtonName: 'close',
  latest20: 'Latest 20 articles',
  seriesList: 'Series List',
  articlesList: 'Articles List',
  diariesList: 'DIaries List',
  articlesOf: 'Articles of ',
  articlesNotFound: 'Articles not found',
  toppageTab: 'Toppage',
  seriesTab: 'Series',
  diariesTab: 'Diaries',
  allTab: 'All articles',
  searchTab: 'Search',
  productsTab: 'Products',
  drawerSearchLabel: 'search word',
  drawerSearchButton: 'search',
  diariesWithClick: 'Diaries(Click here to open)',
  searchResultOf: 'Search results of ',
  searchResultTag: 'tag: ',
  productsList: 'Products',
}

let I18N = null;
if(window.localStorage.getItem('language') === 'en'){
  I18N = en;
}else{
  I18N = ja;
}

export default I18N;
