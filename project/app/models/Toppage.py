""" Toppage Model """

"""Model Definition (generated with love by Masonite)

id: integer default: None
title: string(255) default: None
article_md: text default: None
article_html: text default: None
title_en: string(255) default: None
article_md_en: text default: None
article_html_en: text default: None
meta_description: string(255) default: None
"""

from config.database import Model


class Toppage(Model):
    """Toppage Model
    """
    __table__ = 'toppage'
