from masonite.testing.UnitTest import UnitTest
from app.models.Article import Article
from app.http.controllers.BlogController import BlogController
import json

class TestDiaries(UnitTest):
    def setup_method(self):
        self.diaries = Article.select('title', 'timestamp') \
            .where_null('series_id') \
            .where('is_private', '!=', True) \
            .order_by('timestamp', 'desc') \
            .limit(50) \
            .get() \
            .serialize()

        self.diaries_en = Article.select('title_en AS title', 'timestamp') \
            .where_null('series_id') \
            .where('is_private', '!=', True) \
            .order_by('timestamp', 'desc') \
            .limit(50) \
            .get() \
            .serialize()

        _response = self.json('/api/blog/diaries', None,
                              method="GET").container.make('Response')
        self.response = json.loads(_response)

        _response_en = self.json('/api/blog/diaries_en', None,
                                 method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)

    def test_url_exists(self):
        assert self.route('/api/blog/diaries')
        assert self.route('/api/blog/diaries_en')

    def test_url_available(self):
        assert self.json('/api/blog/diaries', None, method='GET').ok()
        assert self.json('/api/blog/diaries_en', None, method='GET').ok()

    def test_has_controller(self):
        assert self.route(
            '/api/blog/diaries').has_controller(BlogController)
        assert self.route(
            '/api/blog/diaries_en').has_controller(BlogController)

    def test_api(self):
        assert self.diaries == self.response['value']['diaries']

    def test_api_en(self):
        assert self.diaries_en == self.response_en['value']['diaries']