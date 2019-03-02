import pytest
from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Series import Series
from app.models.Article import Article

import json


class TestArticles(UnitTest):
    def setup_method(self):
        super().setup_method()
        self.series = Series.select('id', 'title').where('id', 1).first()
        self.series_en = Series.select('id', 'title_en AS title').where('id', 1).first()

        _response = self.json('/blog/api/getArticles/1', None,
                              method="GET").container.make('Response')
        self.response = json.loads(_response)

        self.model_en = Article \
            .select('id', 'title_en AS title', 'timestamp') \
            .where('series_id', 1) \
            .where('is_private', '!=', True) \
            .get()

        _response_en = self.json('/blog/api/getArticles_en/1', None,
                                 method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)

    def test_url_available(self):
        assert self.route('/blog/api/getArticles/@series_id:int')
        assert self.route('/blog/api/getArticles_en/@series_id:int')

    def test_api(self):
        assert self.series.serialize() == self.response['value']['series']

    def test_api_en(self):
        assert self.series_en.serialize() == self.response_en['value']['series']
