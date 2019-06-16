from masonite.testing import UnitTest
from app.http.controllers.BlogController import BlogController
from app.models.Article import Article
from app.models.Tag import Tag
import json

class TestArticles(UnitTest):
    def setup_method(self):
        #タイムスタンプ取得
        self.timestamp = Article.select('timestamp').find(1).timestamp

        #記事取得
        self.article = Article \
            .select(
                'title',
                'article_html',
                'meta_description',
                'posted_on',
                'updated_on'
            ) \
            .where('timestamp', self.timestamp) \
            .where('is_private', '!=', True) \
            .first() \
            .serialize()

        self.article['tags'] = Tag \
            .select('tags.id', 'tag') \
            .left_join('tagmaps', 'tags.id', '=', 'tagmaps.tag_id') \
            .left_join('articles', 'tagmaps.article_id', '=', 'articles.id') \
            .where('articles.timestamp', '=', self.timestamp) \
            .get() \
            .serialize()

        self.article_en = Article \
            .select(
                'title_en AS title',
                'article_html_en AS article_html',
                'meta_description',
                'posted_on',
                'updated_on'
            ) \
            .where('timestamp', self.timestamp) \
            .where('is_private', '!=', True) \
            .first() \
            .serialize()

        self.article_en['tags'] = Tag \
            .select('tags.id', 'tag_en AS tag') \
            .left_join('tagmaps', 'tags.id', '=', 'tagmaps.tag_id') \
            .left_join('articles', 'tagmaps.article_id', '=', 'articles.id') \
            .where('articles.timestamp', '=', self.timestamp) \
            .get() \
            .serialize()

        #レスポンス取得
        _response = self.json(f'/api/blog/article/{self.timestamp}', None,
                              method="GET").container.make('Response')
        self.response = json.loads(_response)

        _response_en = self.json(f'/api/blog/article_en/{self.timestamp}', None,
                                 method="GET").container.make('Response')
        self.response_en = json.loads(_response_en)


    def test_url_exists(self):
        assert self.route('/api/blog/article/@timestamp:int')
        assert self.route('/api/blog/article_en/@timestamp:int')

    def test_url_available(self):
        assert self.json(f'/api/blog/article/{self.timestamp}', None, method='GET').ok()
        assert self.json(f'/api/blog/article_en/{self.timestamp}', None, method='GET').ok()

    def test_has_controller(self):
        assert self.route(
            '/api/blog/article/@timestamp:int').has_controller(BlogController)
        assert self.route(
            '/api/blog/article/@timestamp:int').has_controller(BlogController)

    def test_api(self):
        assert self.article == self.response['value']['article']

    def test_api_en(self):
        assert self.article_en == self.response_en['value']['article']

    def test_api_invalid(self):
        assert {} == Article.get_article_by_timestamp(12345)
        assert {} == Article.get_article_by_timestamp_en(12345)
