from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='landing'),
    # path('/', views., name=''),
    # path('/', views., name=''),
    # path('/', views., name=''),
]
