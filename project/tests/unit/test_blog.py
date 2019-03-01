from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController

class TestRouting(UnitTest):
    def test_route_exist(self):
        assert self.route('/')
        assert self.route('/blog')

    def test_redirect(self):
        assert self.route('/').status('302 Found')

    def test_has_controller(self):
        assert self.route('/blog').has_controller(BlogController)

    def test_blog_200(self):
        assert self.route('/blog').ok()