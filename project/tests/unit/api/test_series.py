import pytest
from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Series import Series

import json

class TestToppage(UnitTest):
    def setup_method(self):
        super().setup_method()
        self.model = Series.select('series.id', 'series.title') \
            .distinct() \
            .join('articles', 'series.id', '=', 'articles.series_id') \
            .where('articles.is_private', '!=', True) \
            .get()

        _response = self.json('/blog/api/getSeries', None,
                          method="GET").container.make('Response')
        self.response = json.loads(_response)


        self.model_en = Series.select('series.id', 'series.title_en AS title') \
            .distinct() \
            .join('articles', 'series.id', '=', 'articles.series_id') \
            .where('articles.is_private', '!=', True) \
            .get()

        _response_en = self.json('/blog/api/getSeries_en', None,
                          method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)

    def test_url_available(self):
        assert self.route('/blog/api/getSeries')
        assert self.route('/blog/api/getSeries_en')
        assert self.route(
            '/blog/api/getSeries').has_controller(BlogController)
        assert self.route(
            '/blog/api/getSeries_en').has_controller(BlogController)

    def test_api(self):
        assert self.model.serialize() == self.response['value']['series']

    def test_api_en(self):
        assert self.model_en.serialize() == self.response_en['value']['series']