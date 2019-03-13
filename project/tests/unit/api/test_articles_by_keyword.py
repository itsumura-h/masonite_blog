from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Article import Article
import json
import pprint


class TestArticlesByKeyword(UnitTest):
    def setup_method(self):
        self.keyword = '記事1'
        self.keyword_en = 'article1'

    def test_api(self):
        _json = self.json('/blog/api/articlesByKeyword', {'keyword': self.keyword}, method="GET")
        assert _json.ok()
        _json_en = self.json('/blog/api/articlesByKeyword_en', {'keyword': self.keyword}, method="GET")
        assert _json_en.ok()

        _json = self.json('/blog/api/articlesByKeyword', None, method="GET")
        assert _json.ok()
        _json_en = self.json('/blog/api/articlesByKeyword_en', None, method="GET")
        assert _json_en.ok()

    def test_none(self):
        _json = self.json('/blog/api/articlesByKeyword?keyword=', {'keyword': ''}, method="GET")
        assert _json.status('404 Not Found')

        _json_en = self.json('/blog/api/articlesByKeyword_en?keyword=', {'keyword': ''}, method="GET")
        assert _json_en.status('404 Not Found')
