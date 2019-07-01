from masonite.request import Request

from app.domains.display_blog.DisplayBlogRepository import DisplayBlogRepository
from app.domains.display_blog.DisplayBlogEntyties \
    import ToppageEntity, SeriesEntity, ArticlesEntity, ArticleEntity, DiariesEntity, \
    ArticlesWithKeywordEntity, ArticlesWithTagIdEntity

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
        return ArticlesEntity(series, articles)

    @staticmethod
    def get_article_by_timestamp(language, timestamp):
        article, tags = DisplayBlogRepository.get_article_by_timestamp(language, timestamp)
        return ArticleEntity(article, tags)

    @staticmethod
    def get_diaries(language):
        diaries = DisplayBlogRepository.get_diaries(language)
        return [DiariesEntity(**val) for val in diaries]

    @staticmethod
    def get_articles_by_keyword(language, keyword):
        articles = DisplayBlogRepository.get_articles_by_keyword(language, keyword)
        return ArticlesWithKeywordEntity(articles, keyword)

    @staticmethod
    def get_articles_by_tag_id(language, tag_id):
        articles, tag = DisplayBlogRepository.get_articles_by_tag_id(language, tag_id)
        return ArticlesWithTagIdEntity(articles, tag)


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