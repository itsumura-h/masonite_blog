""" Toppage Model """

from config.database import Model


class Toppage(Model):
    """Toppage Model
    """
    __table__ = 'toppage'

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
    #--------------------------------------