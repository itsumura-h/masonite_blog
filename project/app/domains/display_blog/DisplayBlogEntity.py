import datetime
from typing import List, Dict


class ToppageEntity:
    def __init__(self, title:str=None, article_html:str=None, meta_description:str=None):
        self.title = title
        self.article_html = article_html
        self.meta_description = meta_description

class SeriesEntity:
    def __init__(self, id:int=None, title:str=None):
        self.id = id
        self.title = title

class TagsEntiry:
    def __init__(self, id:int=None, tag:str=None):
        self.id = id
        self.tag = tag

class ArticleEntity:
    def __init__(self, id:int=None, title:str=None, article_html:str=None, meta_description:str=None,
                posted_on:str=None, updated_on:str=None, timestamp:int=None, series_id:int=None):
        self.id = id
        self.title = title
        self.article_html = article_html
        self.meta_description = meta_description
        self.posted_on = posted_on
        self.updated_on = updated_on
        self.timestamp = timestamp
        self.series_id = series_id