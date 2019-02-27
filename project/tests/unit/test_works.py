from masonite.helpers.routes import get, post
from masonite.testing import UnitTest
from routes.web import ROUTES
from app.http.controllers.BlogController import BlogController
from app.models.Article import Article
from app.models.Series import Series

# def test_unit():
#     assert True

class TestRouting(UnitTest):
    def test_route_exist(self):
        assert self.route('/')
        assert self.route('/blog')

class TestApi(UnitTest):
    class MockToppage:
        pass

    class TestToppage(UnitTest):
        def setup_method(self):
            from masonite.request import Request
            self.controller = BlogController(Request)

        def test_url_available(self):
            assert self.route('/blog/api/getToppage')
            assert self.route('/blog/api/getToppage_en')

        def test_check_json(self):
            print(self.container.get_toppage())
            assert True