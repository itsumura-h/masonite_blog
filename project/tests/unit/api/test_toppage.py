import pytest
from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Toppage import Toppage

import json

class TestToppage(UnitTest):
    def setup_method(self):
        super().setup_method()
        self.model = Toppage.find(1)
        _response = self.json('/blog/api/getToppage', None,
                          method="GET").container.make('Response')
        self.response = json.loads(_response)

        _response_en = self.json('/blog/api/getToppage_en', None,
                          method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)

    def test_url_available(self):
        assert self.route('/blog/api/getToppage').ok()
        assert self.route('/blog/api/getToppage_en').ok()

    def test_has_controller(self):
        assert self.route(
            '/blog/api/getToppage').has_controller(BlogController)
        assert self.route(
            '/blog/api/getToppage_en').has_controller(BlogController)

    def test_api(self):
        assert self.model.title == self.response['value']['toppage']['title']
        assert self.model.article_html == self.response['value']['toppage']['article_html']
        assert self.model.meta_description == self.response['value']['toppage']['meta_description']

    def test_api_en(self):
        assert self.model.title_en == self.response_en['value']['toppage']['title']
        assert self.model.article_html_en == self.response_en['value']['toppage']['article_html']
        assert self.model.meta_description == self.response_en['value']['toppage']['meta_description']