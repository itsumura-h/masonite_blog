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
            get('/toppage', BlogController.toppage),
            get('/toppage_en', BlogController.toppage_en),

            get('/series', BlogController.series),
            get('/series_en', BlogController.series_en),

            get('/articles/@series_id:int', BlogController.articles),
            get('/articles_en/@series_id:int', BlogController.articles_en),

            get('/article/@timestamp:int', BlogController.article),
            get('/article_en/@timestamp:int', BlogController.article_en),

            get('/diaries', BlogController.diaries),
            get('/diaries_en', BlogController.diaries_en),

            get('/articlesByKeyword', BlogController.articles_by_keyword),
            get('/articlesByKeyword_en', BlogController.articles_by_keyword_en),

            get('/articlesByTagId/@tag_id:int', BlogController.articles_by_tag_id),
            get('/articlesByTagId_en/@tag_id:int', BlogController.articles_by_tag_id_en),
        ], prefix='/api'),

        get('', BlogController.show),
        get('/@a', BlogController.show),
        get('/@a/@b', BlogController.show),
        get('/@a/@b/@c', BlogController.show),
    ], prefix='/blog'),
]
