"""A ResumeController Module."""

import datetime, math, pprint
from masonite.request import Request
from masonite.view import View
from masonite.controllers import Controller
from app.models.resume.PersonalInfo import PersonalInfo
from app.models.resume.Project import Project
from app.http.services.ResumeService import ResumeService

class ResumeController(Controller):
    """ResumeController Controller Class."""

    def __init__(self, request: Request):
        """ResumeController Initializer

        Arguments:
            request {masonite.request.Request} -- The Masonite Request class.
        """
        self.request = request

    def show(self, view: View):
        personal_info, projects = ResumeService().create_pdf()

        return view.render(
            'resume/download',
            {
                'personal_info': personal_info,
                'projects': projects,
            }
        )
