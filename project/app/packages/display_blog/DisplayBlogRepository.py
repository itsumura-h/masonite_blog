from app.models.Toppage import Toppage

class DisplayBlogRepository:
    @staticmethod
    def get_toppage():
        return Toppage \
            .select(
                'title',
                'article_html',
                'meta_description'
            ) \
            .find(1)

    @staticmethod
    def get_toppage_en():
        return Toppage \
            .select(
                'title_en AS title',
                'article_html_en AS article_html',
                'meta_description'
            ) \
            .find(1) \
            .serialize()
