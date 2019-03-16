"""Web Routes."""

from masonite.routes import Get, Post, RouteGroup
from masonite.helpers.routes import get, post
from masonite.routes import Redirect

from app.http.controllers.WelcomeController import WelcomeController
from app.http.controllers.BlogController import BlogController

ROUTES = [
    #Get().route('/', 'WelcomeController@show').name('welcome'),
    #get('/', BlogController.redirect),
    Redirect('/', '/blog/'),

    RouteGroup([
        get('', BlogController.show),
        get('/@a', BlogController.show),
        get('/@a/@b', BlogController.show),
        get('/@a/@b/@c', BlogController.show),
    ], prefix='/blog'),

    RouteGroup([
        RouteGroup([
            get('/toppage', BlogController.get_toppage),
            get('/toppage_en', BlogController.get_toppage_en),

            get('/series', BlogController.get_series),
            get('/series_en', BlogController.get_series_en),

            get('/articles/@series_id:int', BlogController.get_articles),
            get('/articles_en/@series_id:int', BlogController.get_articles_en),

            get('/article/@timestamp:int', BlogController.get_article),
            get('/article_en/@timestamp:int', BlogController.get_article_en),

            get('/diaries', BlogController.get_diaries),
            get('/diaries_en', BlogController.get_diaries_en),

            get('/articlesByKeyword', BlogController.get_articles_by_keyword),
            get('/articlesByKeyword_en', BlogController.get_articles_by_keyword_en),

            get('/articlesByTagId/@tag_id:int', BlogController.get_articles_by_tag_id),
            get('/articlesByTagId_en/@tag_id:int', BlogController.get_articles_by_tag_id_en),
        ], prefix='/blog'),
    ], prefix='/api')
]
