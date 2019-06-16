""" Series Model """

from config.database import Model

class Series(Model):
    """Series Model
    """
    __table__ = 'series'

    @staticmethod
    def get_series():
        return Series.select('series.id', 'series.title') \
            .distinct() \
            .join('articles', 'series.id', '=', 'articles.series_id') \
            .where('articles.is_private', '!=', True) \
            .get() \
            .serialize()

    @staticmethod
    def get_series_en():
        return Series.select('series.id', 'series.title_en AS title') \
            .distinct() \
            .join('articles', 'series.id', '=', 'articles.series_id') \
            .where('articles.is_private', '!=', True) \
            .get() \
            .serialize()
    #--------------------------------------------------------------------------------------------
    @staticmethod
    def get_series_mono(series_id):
        return Series.select('id', 'title').where('id', series_id).first().serialize()

    @staticmethod
    def get_series_mono_en(series_id):
        return Series.select('id', 'title_en AS title').where('id', series_id).first().serialize()
