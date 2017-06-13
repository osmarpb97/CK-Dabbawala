from django.shortcuts import redirect
from django.utils.deprecation import MiddlewareMixin


class HostMiddleware(MiddlewareMixin):
    @staticmethod
    def process_request(request):
        try:
            host = request.META['HTTP_HOST'] + request.META['PATH_INFO']
            print(host)
            # if host == 'dabbawala.com.mx/' or host == 'www.dabbawala.com.mx/':
            # return redirect('users:index')

        except KeyError:
            return None
