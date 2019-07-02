from app.models.Toppage import Toppage
from app.models.Series import Series
from app.models.Article import Article
from app.models.Tag import Tag

class DisplayBlogRepository:

    @staticmethod
    def get_toppage(language):
        args = ['title', 'article_html', 'meta_description']
        if language == 'en':
            args[0] = 'title_en AS title'
            args[1] = 'article_html_en AS article_html'

        return Toppage.select(*args).find(1).serialize()

    @staticmethod
    def get_series(language):
        args = ['series.id', 'series.title']
        where_args = ['articles.article_md', '!=', '']

        if language == 'en':
            args[1] = 'series.title_en AS title'
<<<<<<< HEAD
            where_args[0] = ['articles.article_md_en', '!=', '']
=======
            where_args[0] = 'articles.article_md_en'
>>>>>>> b004990453ddebebfd9ccabd3ff4072b9b47abc0

        return Series.select(*args) \
            .distinct() \
            .join('articles', 'series.id', '=', 'articles.series_id') \
            .where('articles.is_private', '!=', True) \
            .where(*where_args) \
            .get() \
            .serialize()

    @staticmethod
    def get_articles(language, series_id):
        series_args = ['id', 'title']
        article_args = ['id', 'title', 'timestamp']
        where_args = ['article_md', '!=', '']

        if language == 'en':
            series_args[1] = 'title_en AS title'
            article_args[1] = 'title_en AS title'
<<<<<<< HEAD
            where_args[0] = ['article_md_en', '!=', '']
=======
            where_args[0] = 'article_md_en'
>>>>>>> b004990453ddebebfd9ccabd3ff4072b9b47abc0

        series = Series.select(*series_args).where('id', series_id).first().serialize()

        articles = Article \
            .select(*article_args) \
            .where('series_id', series_id) \
            .where('is_private', '!=', True) \
            .where(*where_args) \
            .order_by('title', 'asc') \
            .get() \
            .serialize()

            # .where('title', '!=', '') \

        return series, articles

    @staticmethod
    def get_article_by_timestamp(language, timestamp:int):
        article_args = ['title', 'article_html', 'meta_description', 'posted_on', 'updated_on']
        where_args = ['article_md', '!=', '']
        tag_args = ['tags.id', 'tag']

        if language == 'en':
            article_args[0] = 'title_en AS title'
            article_args[1] = 'article_html_en AS article_html'
<<<<<<< HEAD
            where_args[0] = ['article_md_en', '!=', '']
=======
            where_args[0] = 'article_md_en'
>>>>>>> b004990453ddebebfd9ccabd3ff4072b9b47abc0
            tag_args[1] = 'tag_en AS tag'

        article = Article \
            .select(*article_args) \
            .where('timestamp', timestamp) \
            .where('is_private', '!=', True) \
            .where(*where_args) \
            .first() \
            .serialize()

        tags = Tag \
            .select(*tag_args) \
            .left_join('tagmaps', 'tags.id', '=', 'tagmaps.tag_id') \
            .left_join('articles', 'tagmaps.article_id', '=', 'articles.id') \
            .where('articles.timestamp', '=', timestamp) \
            .get() \
            .serialize()

        return article, tags

    @staticmethod
    def get_diaries(language):
        args = ['title', 'timestamp']

        if language == 'en':
            args[0] = 'title_en AS title'

        return Article.select(*args) \
            .where_null('series_id') \
            .where('title', '!=', '') \
            .where('is_private', '!=', True) \
            .order_by('timestamp', 'desc') \
            .limit(50) \
            .get() \
            .serialize()

    @staticmethod
    def get_articles_by_keyword(language, keyword):
        args = ['title', 'timestamp']
        where_args = ['article_md', 'like', f'%{keyword}%']

        if language == 'en':
            args[0] = 'title_en AS title'
            where_args[0] = 'article_md_en'

        return Article \
                .select(*args) \
                .where('is_private', '!=', True) \
                .where(*where_args) \
                .get() \
                .serialize()

    @staticmethod
    def get_articles_by_tag_id(language, tag_id):
        article_args = ['articles.title', 'articles.timestamp']
        where_args = ['article_md', '!=', '']
        tag_args = ['tag']

        if language == 'en':
            article_args[0] = 'articles.title_en AS title'
            where_args[0] = 'article_md_en'
            tag_args[0] = 'tag_en AS tag'

        articles = Article \
            .select(*article_args) \
            .left_join('tagmaps', 'articles.id', '=', 'tagmaps.article_id') \
            .left_join('tags', 'tagmaps.tag_id', '=', 'tags.id') \
            .where('is_private', '!=', True) \
            .where(*where_args) \
            .where('tags.id', '=', tag_id) \
            .get() \
            .serialize()

        tag = Tag \
            .select(*tag_args) \
            .find(tag_id) \
            .tag

        return articles, tag