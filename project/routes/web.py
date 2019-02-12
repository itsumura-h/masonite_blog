"""Web Routes."""

from masonite.routes import Get, Post, RouteGroup
from masonite.helpers.routes import get, post
from masonite.routes import Redirect

from app.http.controllers.WelcomeController import WelcomeController
from app.http.controllers.BlogController import BlogController

ROUTES = [
    #Get().route('/', 'WelcomeController@show').name('welcome'),
    #get('/', BlogController.redirect),
    Redirect('/', '/blog', status=302, methods=['GET']),

    RouteGroup([
        RouteGroup([
            get('/getToppage', BlogController.get_toppage),
            get('/getToppage_en', BlogController.get_toppage_en),

            get('/getSeries', BlogController.get_series),
            get('/getSeries_en', BlogController.get_series_en),

            get('/getArticles/@series_id:int', BlogController.get_articles),
            get('/getArticles_en/@series_id:int', BlogController.get_articles_en),

            get('/getArticle/@timestamp:int', BlogController.get_article),
            get('/getArticle_en/@timestamp:int', BlogController.get_article_en),

            get('/getDiaries', BlogController.get_diaries),
            get('/getDiaries_en', BlogController.get_diaries_en),

            get('/getArticlesByKeyword', BlogController.get_articles_by_keyword),
            get('/getArticlesByKeyword_en', BlogController.get_articles_by_keyword_en),

            get('/getArticlesByTagId/@tag_id:int', BlogController.get_articles_by_tag_id),
            get('/getArticlesByTagId_en/@tag_id:int', BlogController.get_articles_by_tag_id_en),
        ], prefix='/api'),

        get('', BlogController.show),
        get('/@a', BlogController.show),
        get('/@a/@b', BlogController.show),
        get('/@a/@b/@c', BlogController.show),
    ], prefix='/blog'),
]
