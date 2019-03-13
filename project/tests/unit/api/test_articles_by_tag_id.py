from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Article import Article
import json
import pprint


class TestArticlesByKeyword(UnitTest):
    def setup_method(self):
        self.articles = Article \
            .select(
                'articles.title',
                'articles.timestamp'
            ) \
            .left_join('tagmaps', 'articles.id', '=', 'tagmaps.article_id') \
            .left_join('tags', 'tagmaps.tag_id', '=', 'tags.id') \
            .where('is_private', '!=', True) \
            .where('tags.id', 1) \
            .get() \
            .serialize()

        self.articles_en = Article \
            .select(
                'articles.title_en AS title',
                'articles.timestamp'
            ) \
            .left_join('tagmaps', 'articles.id', '=', 'tagmaps.article_id') \
            .left_join('tags', 'tagmaps.tag_id', '=', 'tags.id') \
            .where('is_private', '!=', True) \
            .where('tags.id', 1) \
            .get() \
            .serialize()

        # _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

        _response = self.json('/blog/api/articlesByTagId/1', None,
                              method="GET").container.make('Response')
        self.response = json.loads(_response)

        _response_en = self.json('/blog/api/articlesByTagId_en/1', None,
                                method = "GET").container.make('Response')
        self.response_en = json.loads(_response_en)

    def test_route_exists(self):
        assert self.route('/blog/api/articlesByTagId/@tag_id:int')
        assert self.route('/blog/api/articlesByTagId_en/@tag_id:int')

    def test_url_available(self):
        assert self.json('/blog/api/articlesByTagId/1',
                         None, method = 'GET').ok()
        assert self.json('/blog/api/articlesByTagId_en/1',
                         None, method = 'GET').ok()

    def test_has_controller(self):
        assert self.route(
            '/blog/api/articlesByTagId/@tag_id:int').has_controller(BlogController)
        assert self.route(
            '/blog/api/articlesByTagId_en/@tag_id:int').has_controller(BlogController)

    def test_api(self):
        assert self.articles == self.response['value']['articles']
        assert self.articles_en == self.response_en['value']['articles']
