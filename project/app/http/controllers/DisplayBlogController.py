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
        toppage = DisplayBlogService.get_toppage(self.language)
        return {'value': {
            'toppage': {
                'title': toppage.title,
                'article_html': toppage.article_html,
                'meta_description': toppage.meta_description
            }
        }}

    def get_series(self):
        series = DisplayBlogService.get_series(self.language)
        return {
            'value': {
                'series': [
                    {'id': val.id, 'title': val.title} for val in series
                ]
            }
        }

    def get_articles(self):
        series_id = self.request.param('series_id')
        series, articles = DisplayBlogService.get_articles(self.language, series_id)
        return {'value': {
            'series': {
                'id': series.id,
                'title': series.title
            },
            'articles': [
                {'title': val.title, 'timestamp': val.timestamp} for val in articles
            ]
        }}

    def get_article(self):
        timestamp = self.request.param('timestamp')
        article, tags = DisplayBlogService.get_article_by_timestamp(self.language, timestamp)
        return {'value':{
            'article':{
                'title': article.title,
                'article_html': article.article_html,
                'meta_description': article.meta_description,
                'posted_on': article.posted_on,
                'updated_on': article.updated_on,
            },
            'tags':[
                {'id': val.id, 'tag': val.tag} for val in tags
            ]
        }}

    def get_diaries(self):
        diaries = DisplayBlogService.get_diaries(self.language)
        return {'value': {
            'diaries': [
                {'title': val.title, 'timestamp': val.timestamp} for val in diaries
            ]
        }}

    def get_articles_by_keyword(self):
        keyword = self.request.input('keyword')
        if keyword == '':
            return {'value': ''}

        articles = DisplayBlogService.get_articles_by_keyword(self.language, keyword)
        return {'value': {
            'articles': [
                {'title': val.title, 'timestamp': val.timestamp} for val in articles
            ],
            'keyword': keyword
        }}

    def get_articles_by_tag_id(self):
        tag_id = self.request.param('tag_id')
        articles, tag = DisplayBlogService.get_articles_by_tag_id(self.language, tag_id)
        return {'value': {
            'articles': [
                {'title': val.title, 'timestamp': val.timestamp} for val in articles
            ],
            'tag': tag
        }}