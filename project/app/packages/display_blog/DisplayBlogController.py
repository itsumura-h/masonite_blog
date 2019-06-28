
from masonite.request import Request

from app.models.Article import Article
from app.models.Series import Series
from app.models.Tag import Tag
from app.models.Toppage import Toppage

from app.packages.display_blog.DisplayBlogRepository import DisplayBlogRepository

class DisplayBlogController:
    """DisplayBlogController
    """
    def __init__(self, request:Request):
        self.param = Request.param
        # if request.header('Access-Control-Allow-Origin') != 'http://localhost:3001':
        #     request.header('Access-Control-Allow-Origin', 'http://localhost:3001')

    __toppage__ = Toppage

    def show(self):
        return view('blog/build/index.html')

    #========================================================
    def get_toppage(self, request:Request):
        toppage = DisplayBlogRepository.get_toppage().serialize()
        return {'value': {'toppage': toppage}}

    def get_toppage_en(self, request:Request):
        toppage = DisplayBlogRepository.get_toppage_en().serialize()
        return {'value': {'toppage': toppage}}