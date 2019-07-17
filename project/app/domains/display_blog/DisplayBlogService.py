from masonite.request import Request

from app.domains.display_blog.DisplayBlogRepository import DisplayBlogRepository
from app.domains.display_blog.DisplayBlogEntity import ToppageEntity, SeriesEntity, ArticleEntity, TagsEntiry
from pprint import pprint


class DisplayBlogService:
    """DisplayBlogService
    """
    #==============================================================================
    # ドメインサービス
    #==============================================================================

    @staticmethod
    def get_toppage(language):
        val = DisplayBlogRepository.get_toppage(language)
        return ToppageEntity(**val)

    @staticmethod
    def get_series(language):
        series = DisplayBlogRepository.get_series(language)
        return [SeriesEntity(**val) for val in series]

    @staticmethod
    def get_articles(language, series_id):
        series, articles = DisplayBlogRepository.get_articles(language, series_id)
        series = SeriesEntity(**series)
        articles = [ArticleEntity(**val) for val in articles]
        return series, articles

    @staticmethod
    def get_article_by_timestamp(language, timestamp):
        article, tags = DisplayBlogRepository.get_article_by_timestamp(language, timestamp)
        articles = ArticleEntity(**article)
        tags = [TagsEntiry(**val) for val in tags]
        return articles, tags

    @staticmethod
    def get_diaries(language):
        diaries = DisplayBlogRepository.get_diaries(language)
        return [ArticleEntity(**val) for val in diaries]

    @staticmethod
    def get_articles_by_keyword(language, keyword):
        articles = DisplayBlogRepository.get_articles_by_keyword(language, keyword)
        return [ArticleEntity(**val) for val in articles]

    @staticmethod
    def get_articles_by_tag_id(language, tag_id):
        articles, tag = DisplayBlogRepository.get_articles_by_tag_id(language, tag_id)
        articles = [ArticleEntity(**val) for val in articles]
        return articles, tag


    #==============================================================================
    # アプリケーションサービス
    #==============================================================================

    @staticmethod
    def get_language(request: Request)->str:
        """specify language

        Args:
            request (Request): masonite.request

        Returns:
            str: language 'ja' or 'en'
        """
        language = request.input('language')
        language = language if language else 'ja'
        return language