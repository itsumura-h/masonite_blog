"""Project Model."""

from config.database import Model


class Project(Model):
    """Project Model."""
    __table__ = 'resume_porject'

    @staticmethod
    def get_projects():
        return Project.all()