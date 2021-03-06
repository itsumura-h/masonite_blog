""" Tag Model """

"""Model Definition (generated with love by Masonite)

id: integer default: None
title: string(255) default: None
title_en: string(255) default: None
"""

from config.database import Model


class Tag(Model):
    """Tag Model
    """
    __table__ = 'tags'

    @staticmethod
    def get_tags_by_timestamp(timestamp):
        return Tag \
            .select('tags.id', 'tag') \
            .left_join('tagmaps', 'tags.id', '=', 'tagmaps.tag_id') \
            .left_join('articles', 'tagmaps.article_id', '=', 'articles.id') \
            .where('articles.timestamp', '=', timestamp) \
            .get() \
            .serialize()

    @staticmethod
    def get_tags_by_timestamp_en(timestamp):
        return Tag \
            .select('tags.id', 'tag_en AS tag') \
            .left_join('tagmaps', 'tags.id', '=', 'tagmaps.tag_id') \
            .left_join('articles', 'tagmaps.article_id', '=', 'articles.id') \
            .where('articles.timestamp', '=', timestamp) \
            .get() \
            .serialize()
    # ------------------------------------------------
    @staticmethod
    def get_tag_name_by_tag_id(tag_id):
        return Tag \
            .select('tag') \
            .find(tag_id) \
            .serialize()

    @staticmethod
    def get_tag_name_by_tag_id_en(tag_id):
        return Tag \
            .select('tag_en AS tag') \
            .find(tag_id) \
            .serialize()
