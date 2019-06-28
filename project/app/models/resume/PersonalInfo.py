"""PersonalInfo Model."""

from config.database import Model


class PersonalInfo(Model):
    """PersonalInfo Model."""
    __table__ = 'resume_personalinfo'

    @staticmethod
    def get_my_profile():
        personal_info = PersonalInfo.find(1)
        if personal_info:
            return personal_info
