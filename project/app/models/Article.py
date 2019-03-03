""" Article Model """

from config.database import Model


class Article(Model):
    """Article Model
    """
    __table__ = 'articles'

    @staticmethod
    def articles_by_series_id(series_id):
        return Article \
            .select('id', 'title', 'timestamp') \
            .where('series_id', series_id) \
            .where('is_private', '!=', True) \
            .get() \
            .serialize()

    @staticmethod
    def articles_by_series_id_en(series_id):
        return Article \
            .select('id', 'title_en AS title', 'timestamp') \
            .where('series_id', series_id) \
            .where('is_private', '!=', True) \
            .get() \
            .serialize()
    #------------------------------------------------------
    @staticmethod
    def article_by_timestamp(timestamp):
        article = Article \
            .select(
                'title',
                'article_html',
                'meta_description',
                'posted_on',
                'updated_on'
            ) \
            .where('timestamp', timestamp) \
            .where('is_private', '!=', True) \
            .first()

        if article is not None:
            return article.serialize()
        else:
            return {}

    @staticmethod
    def article_by_timestamp_en(timestamp):
        article = Article \
            .select(
                'title_en AS title',
                'article_html_en AS article_html',
                'meta_description',
                'posted_on',
                'updated_on'
            ) \
            .where('timestamp', timestamp) \
            .where('is_private', '!=', True) \
            .first()

        if article is not None:
            return article.serialize()
        else:
            return {}
    #------------------------------------------------------
    @staticmethod
    def diaries():
        return Article.select('title', 'timestamp') \
            .where_null('series_id') \
            .where('is_private', '!=', True) \
            .order_by('timestamp', 'desc') \
            .limit(50) \
            .get() \
            .serialize()

    @staticmethod
    def diaries_en():
        return Article.select('title_en AS title', 'timestamp') \
            .where_null('series_id') \
            .where('is_private', '!=', True) \
            .order_by('timestamp', 'desc') \
            .limit(50) \
            .get() \
            .serialize()
    #------------------------------------------------------
    @staticmethod
    def articles_by_keyword(keyword):
        return Article \
            .select(
                'title',
                'timestamp'
            ) \
            .where('is_private', '!=', True) \
            .where('article_md', 'like', '%'+keyword+'%') \
            .get() \
            .serialize()

    @staticmethod
    def articles_by_keyword_en(keyword):
        return Article \
            .select(
                'title_en AS title',
                'timestamp'
            ) \
            .where('is_private', '!=', True) \
            .where('article_md_en', 'like', '%'+keyword+'%') \
            .get() \
            .serialize()
    #------------------------------------------------------
    @staticmethod
    def articles_by_tag_id(tag_id):
        return Article \
            .select(
                'articles.title',
                'articles.timestamp'
            ) \
            .left_join('tagmaps', 'articles.id', '=', 'tagmaps.article_id') \
            .left_join('tags', 'tagmaps.tag_id', '=', 'tags.id') \
            .where('is_private', '!=', True) \
            .where('tags.id', tag_id) \
            .get() \
            .serialize()

    @staticmethod
    def articles_by_tag_id_en(tag_id):
        return Article \
            .select(
                'articles.title_en AS title',
                'articles.timestamp'
            ) \
            .left_join('tagmaps', 'articles.id', '=', 'tagmaps.article_id') \
            .left_join('tags', 'tagmaps.tag_id', '=', 'tags.id') \
            .where('is_private', '!=', True) \
            .where('tags.id', tag_id) \
            .get() \
            .serialize()
