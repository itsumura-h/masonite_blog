from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Series import Series
from app.models.Article import Article
import json


class TestArticles(UnitTest):
    def setup_method(self):
        super().setup_method()
        self.series = Series.select('id', 'title').where('id', 1).first()
        self.series_en = Series.select(
            'id', 'title_en AS title').where('id', 1).first()

        #_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

        self.articles = Article \
            .select('id', 'title', 'timestamp') \
            .where('series_id', 1) \
            .where('is_private', '!=', True) \
            .get()

        self.articles_en = Article \
            .select('id', 'title_en AS title', 'timestamp') \
            .where('series_id', 1) \
            .where('is_private', '!=', True) \
            .get()

        #_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

        _response = self.json('/api/blog/articles/1', None,
                              method="GET").container.make('Response')
        self.response = json.loads(_response)

        _response_en = self.json('/api/blog/articles_en/1', None,
                                 method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)


    def test_url_exists(self):
        assert self.route('/api/blog/articles/@series_id:int')
        assert self.route('/api/blog/articles_en/@series_id:int')

    def test_url_available(self):
        assert self.json('/api/blog/articles/1', None, method='GET').ok()
        assert self.json('/api/blog/articles_en/1', None, method='GET').ok()

    def test_has_controller(self):
        assert self.route(
            '/api/blog/articles/@series_id:int').has_controller(BlogController)
        assert self.route(
            '/api/blog/articles_en/@series_id:int').has_controller(BlogController)

    def test_api(self):
        assert self.series.serialize() == self.response['value']['series']
        assert self.articles.serialize() == self.response['value']['articles']

    def test_api_en(self):
        assert self.series_en.serialize() == self.response_en['value']['series']
        assert self.articles_en.serialize() == self.response_en['value']['articles']
