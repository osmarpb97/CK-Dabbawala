from django.conf import settings
from django.conf.urls import url

from . import views


app_name = 'orders'

urlpatterns = [
    # New Customer
    url(r'^orders/new/$', views.new_order, name='new_order'),
    url(r'^arma-tu-dabba/$', views.new_order, name='new_dabba'),
    url(r'^pay/$', views.pay, name='pay'),
]

# Test
if settings.DEBUG:
    # urlpatterns.append( url(r'^customers/test/$', views.test, name='customers_test'))
    pass
