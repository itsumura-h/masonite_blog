from app.models.Toppage import Toppage
from app.packages.display_blog.DisplayBlogEntyties import ToppageEntity, ToppageEnEntity

class DisplayBlogRepository:
    @staticmethod
    def get_toppage():
        result = Toppage \
            .select(
                'title',
                'article_html',
                'meta_description'
            ) \
            .find(1) \
            .serialize()

        return ToppageEntity(**result)

    @staticmethod
    def get_toppage_en():
        result = Toppage \
            .select(
                'title_en AS title',
                'article_html_en AS article_html',
                'meta_description'
            ) \
            .find(1) \
            .serialize()

        return ToppageEnEntity(**result)