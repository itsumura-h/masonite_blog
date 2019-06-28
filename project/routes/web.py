"""Web Routes."""

from masonite.routes import Get, Post, RouteGroup
# from masonite.helpers.routes import get, post
from masonite.routes import Redirect

from app.http.controllers.WelcomeController import WelcomeController
from app.http.controllers.BlogController import BlogController
from app.http.controllers.ResumeController import ResumeController
from app.packages.display_blog.DisplayBlogController import DisplayBlogController

ROUTES = [
    #Get().route('/', 'WelcomeController@show').name('welcome'),
    #get('/', BlogController.redirect),
    # RouteGroup([
    #     Get().route('/', BlogController.show),
    #     Get().route('/@a', BlogController.show),
    #     Get().route('/@a/@b', BlogController.show),
    #     Get().route('/@a/@b/@c', BlogController.show),
    # ], prefix='/blog'),
    RouteGroup([
        Get().route('/', DisplayBlogController.show),
        Get().route('/@a', DisplayBlogController.show),
        Get().route('/@a/@b', DisplayBlogController.show),
        Get().route('/@a/@b/@c', DisplayBlogController.show),
    ], prefix='/blog'),

    RouteGroup([
        RouteGroup([
            # Get().route('/toppage', BlogController.get_toppage),
            # Get().route('/toppage_en', BlogController.get_toppage_en),
            Get().route('/toppage', DisplayBlogController.get_toppage),
            Get().route('/toppage_en', DisplayBlogController.get_toppage_en),

            Get().route('/series', BlogController.get_series),
            Get().route('/series_en', BlogController.get_series_en),

            Get().route('/articles/@series_id:int', BlogController.get_articles),
            Get().route('/articles_en/@series_id:int', BlogController.get_articles_en),

            Get().route('/article/@timestamp:int', BlogController.get_article),
            Get().route('/article_en/@timestamp:int', BlogController.get_article_en),

            Get().route('/diaries', BlogController.get_diaries),
            Get().route('/diaries_en', BlogController.get_diaries_en),

            Get().route('/articlesByKeyword', BlogController.get_articles_by_keyword),
            Get().route('/articlesByKeyword_en', BlogController.get_articles_by_keyword_en),

            Get().route('/articlesByTagId/@tag_id:int', BlogController.get_articles_by_tag_id),
            Get().route('/articlesByTagId_en/@tag_id:int', BlogController.get_articles_by_tag_id_en),
        ], prefix='/blog'),

        RouteGroup([
            Get().route('/download', ResumeController.show),
        ], prefix='/resume'),
    ], prefix='/api'),

    Get().route('/masonite', WelcomeController.show),

    Redirect('/', '/blog/'),
]
