"""Web Routes."""

from masonite.routes import Get, Post, RouteGroup
# from masonite.helpers.routes import get, post
from masonite.routes import Redirect

from app.http.controllers.WelcomeController import WelcomeController
from app.http.controllers.BlogController import BlogController
from app.http.controllers.ResumeController import ResumeController
from app.http.controllers.DisplayBlogController import DisplayBlogController

ROUTES = [
    #Get().route('/', 'WelcomeController@show').name('welcome'),
    RouteGroup([
        Get().route('/', DisplayBlogController.show),
        Get().route('/@a', DisplayBlogController.show),
        Get().route('/@a/@b', DisplayBlogController.show),
        Get().route('/@a/@b/@c', DisplayBlogController.show),
    ], prefix='/blog'),

    RouteGroup([
        RouteGroup([
            Get().route('/toppage', DisplayBlogController.get_toppage),
            Get().route('/series', DisplayBlogController.get_series),
            Get().route('/articles/@series_id:int', DisplayBlogController.get_articles),
            Get().route('/article/@timestamp:int', DisplayBlogController.get_article),
            Get().route('/diaries', DisplayBlogController.get_diaries),
            Get().route('/articlesByKeyword', DisplayBlogController.get_articles_by_keyword),
            Get().route('/articlesByTagId/@tag_id:int', DisplayBlogController.get_articles_by_tag_id),
        ], prefix='/blog'),

        RouteGroup([
            Get().route('/download', ResumeController.show),
        ], prefix='/resume'),
    ], prefix='/api'),

    Get().route('/masonite', WelcomeController.show),

    Redirect('/', '/blog/'),
]
