from masonite.request import Request

from app.domains.display_blog.DisplayBlogService import DisplayBlogService

class DisplayBlogController:
    """DisplayBlogController
    """
    def __init__(self, request:Request):
        self.request = request
        self.language = DisplayBlogService.get_language(request)

    def show(self):
        return view('blog/build/index.html')

    #========================================================
    def get_toppage(self):
        toppage = DisplayBlogService.get_toppage(self.language).to_dict()
        return {'value': {'toppage': toppage}}

    def get_series(self):
        series = DisplayBlogService.get_series(self.language)
        series = [val.to_dict() for val in series]
        return {'value': {'series': series}}

    def get_articles(self):
        series_id = self.request.param('series_id')
        articles = DisplayBlogService.get_articles(self.language, series_id).to_dict()
        return {'value': articles}

    def get_article(self):
        timestamp = self.request.param('timestamp')
        article = DisplayBlogService.get_article_by_timestamp(self.language, timestamp).to_dict()
        return {'value': article}

    def get_diaries(self):
        diaries = DisplayBlogService.get_diaries(self.language)
        diaries = [val.to_dict() for val in diaries]
        return {'value': {'diaries': diaries}}

    def get_articles_by_keyword(self):
        keyword = self.request.input('keyword')
        if keyword == '':
            return {'value': ''}

        articles = DisplayBlogService.get_articles_by_keyword(self.language, keyword)
        return {'value': articles.to_dict()}

    def get_articles_by_tag_id(self):
        tag_id = self.request.param('tag_id')
        articles = DisplayBlogService.get_articles_by_tag_id(self.language, tag_id)
        return {'value': articles.to_dict()}