"""ResetParams Middleware."""

from masonite.request import Request


class ResetParamsMiddleware:
    """ResetParams Middleware."""

    def __init__(self, request: Request):
        """Inject Any Dependencies From The Service Container.

        Arguments:
            Request {masonite.request.Request} -- The Masonite request object
        """
        self.request = request

    def before(self):
        """Run This Middleware Before The Route Executes."""
        pass

    def after(self):
        """Run This Middleware After The Route Executes."""
        self.request.request_variables = {}
