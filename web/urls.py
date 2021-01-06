from django.urls import path
from . import views

app_name = 'web'

urlpatterns=[
    path('', views.news, name="main"),
    path('news', views.news, name="news"),
    path('ai', views.ai, name="ai"),
    path('new_info', views.new_information, name="new_information"),
    path('agreement', views.agreement, name="agreement"),
    path('talk', views.talk, name="talk"),
    path('form', views.form, name="form"),
]
