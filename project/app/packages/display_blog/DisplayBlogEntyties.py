class ToppageEntity:
    def __init__(self, title:str, article_html:str, meta_description:str):
        self.title = title
        self.article_html = article_html
        self.meta_description = meta_description

    def to_dict(self):
        return {
            'title': self.title,
            'article_html': self.article_html,
            'meta_description': self.meta_description,
        }


class ToppageEnEntity:
    def __init__(self, title:str, article_html:str, meta_description:str):
        self.title = title
        self.article_html = article_html
        self.meta_description = meta_description

    def to_dict(self):
        return {
            'title': self.title,
            'article_html': self.article_html,
            'meta_description': self.meta_description,
        }