from django.conf.urls import url
from . import views

app_name = "timeisknowledge"
urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^fact/$', views.fact, name='fact')
]
