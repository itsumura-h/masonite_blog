""" A BlogController Module """
from masonite.request import Request

from app.models.Article import Article
from app.models.Series import Series
from app.models.Tag import Tag
from app.models.Toppage import Toppage

class BlogController:
    """BlogController
    """
    def __init__(self, request:Request):
        self.param = Request.param
        if request.header('Access-Control-Allow-Origin') != 'http://localhost:3000':
            request.header('Access-Control-Allow-Origin', 'http://localhost:3000')

    __toppage__ = Toppage


    def show(self):
        return view('blog/build/index.html')


    #_/_/_/_/_/_/_/_/  API  /_/_/_/_/_/_/_/_/
    def toppage(self, request:Request):
        toppage = Toppage.toppage().serialize()
        return {'value': {'toppage': toppage}}

    def toppage_en(self, request:Request):
        toppage = Toppage.toppage_en()
        return {'value': {'toppage': toppage}}
    #----------------------------------------------------
    def series(self, request:Request):
        series = Series.series()
        return{'value': {'series': series}}

    def series_en(self, request:Request):
        series = Series.series_en()
        return{'value': {'series': series}}
    #----------------------------------------------------
    def articles(self, request:Request):
        series_id = request.param('series_id')
        series = Series.series_mono(series_id)
        articles = Article.articles_by_series_id(series_id)
        return {'value':{'series':series, 'articles': articles}}

    def articles_en(self, request:Request):
        series_id = request.param('series_id')
        series = Series.series_mono_en(series_id)
        articles = Article.articles_by_series_id_en(series_id)
        return {'value':{'series':series, 'articles': articles}}
    #-----------------------------------------------------
    def article(self, request:Request):
        timestamp = request.param('timestamp')
        article = Article.article_by_timestamp(timestamp)
        article['tags'] = Tag.tags_by_timestamp(timestamp)
        return {'value': {'article': article}}

    def article_en(self, request:Request):
        timestamp = request.param('timestamp')
        article = Article.article_by_timestamp_en(timestamp)
        article['tags'] = Tag.tags_by_timestamp_en(timestamp)
        return {'value': {'article': article}}
    #-----------------------------------------------------
    def diaries(self, request:Request):
        diaries = Article.diaries()
        return{'value': {'diaries': diaries}}

    def diaries_en(self, request:Request):
        diaries = Article.diaries_en()
        return{'value': {'diaries': diaries}}
    #-----------------------------------------------------
    def articles_by_keyword(self, request:Request):
        keyword = request.input('keyword')
        if keyword == '':
            return {'value': ''}

        articles = Article.articles_by_keyword(keyword)
        return {'value': {'keyword': keyword, 'articles': articles}}

    def articles_by_keyword_en(self, request:Request):
        keyword = request.input('keyword')
        if keyword == '':
            return {'value': ''}

        articles = Article.articles_by_keyword_en(keyword)
        return {'value': {'keyword': keyword, 'articles': articles}}
    #-----------------------------------------------------
    def articles_by_tag_id(self, request:Request):
        tag_id = request.param('tag_id')
        tag = Tag.tag_name_by_tag_id(tag_id)
        articles = Article.articles_by_tag_id(tag_id)
        return {'value': {'tag': tag, 'articles': articles}}

    def articles_by_tag_id_en(self, request:Request):
        tag_id = request.param('tag_id')
        tag = Tag.tag_name_by_tag_id_en(tag_id)
        articles = Article.articles_by_tag_id_en(tag_id)
        return {'value': {'tag': tag, 'articles': articles}}
