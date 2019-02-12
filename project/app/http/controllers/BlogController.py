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


    def show(self):
        return view('blog/build/index.html')

    #def redirect(self, request:Request):
    #    return request.redirect('/blog/')


    #_/_/_/_/_/_/_/_/  API  /_/_/_/_/_/_/_/_/
    def get_toppage(self, request:Request):
        toppage = Toppage.get_toppage()
        return {'value': {'toppage': toppage}}

    def get_toppage_en(self, request:Request):
        toppage = Toppage.get_toppage_en()
        return {'value': {'toppage': toppage}}
    #----------------------------------------------------
    def get_series(self, request:Request):
        series = Series.get_series()
        return{'value': {'series': series}}

    def get_series_en(self, request:Request):
        series = Series.get_series_en()
        return{'value': {'series': series}}
    #----------------------------------------------------
    def get_articles(self, request:Request):
        series_id = request.param('series_id')
        series = Series.get_series_mono(series_id)
        articles = Article.get_articles_by_series_id(series_id)
        return {'value':{'series':series, 'articles': articles}}

    def get_articles_en(self, request:Request):
        series_id = request.param('series_id')
        series = Series.get_series_mono_en(series_id)
        articles = Article.get_articles_by_series_id_en(series_id)
        return {'value':{'series':series, 'articles': articles}}
    #-----------------------------------------------------
    def get_article(self, request:Request):
        timestamp = request.param('timestamp')
        article = Article.get_article_by_timestamp(timestamp)
        article['tags'] = Tag.get_tags_by_timestamp(timestamp)
        return {'value': {'article': article}}

    def get_article_en(self, request:Request):
        timestamp = request.param('timestamp')
        article = Article.get_article_by_timestamp_en(timestamp)
        article['tags'] = Tag.get_tags_by_timestamp_en(timestamp)
        return {'value': {'article': article}}
    #-----------------------------------------------------
    def get_diaries(self, request:Request):
        diaries = Article.get_diaries()
        return{'value': {'diaries': diaries}}

    def get_diaries_en(self, request:Request):
        diaries = Article.get_diaries_en()
        return{'value': {'diaries': diaries}}
    #-----------------------------------------------------
    def get_articles_by_keyword(self, request:Request):
        keyword = request.input('keyword')
        if keyword is '':
            return {'value': ''}

        articles = Article.get_articles_by_keyword(keyword)
        return {'value': {'keyword': keyword, 'articles': articles}}

    def get_articles_by_keyword_en(self, request:Request):
        keyword = request.input('keyword')
        if keyword is '':
            return {'value': ''}

        articles = Article.get_articles_by_keyword_en(keyword)
        return {'value': {'keyword': keyword, 'articles': articles}}
    #-----------------------------------------------------
    def get_articles_by_tag_id(self, request:Request):
        tag_id = request.param('tag_id')
        tag = Tag.get_tag_name_by_tag_id(tag_id)
        articles = Article.get_articles_by_tag_id(tag_id)
        return {'value': {'tag': tag, 'articles': articles}}

    def get_articles_by_tag_id_en(self, request:Request):
        tag_id = request.param('tag_id')
        tag = Tag.get_tag_name_by_tag_id_en(tag_id)
        articles = Article.get_articles_by_tag_id_en(tag_id)
        return {'value': {'tag': tag, 'articles': articles}}
