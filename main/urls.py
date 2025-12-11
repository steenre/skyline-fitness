from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='landing'),
    path('about-us/', views.about, name='about'),
    path('classes-and-schedule/', views.classes, name='classes'),
    path('contact-us/', views.contact, name='contact-us'),
    path('facilities/', views.facilities, name='facilities'),
    # path('/', views., name=''),
    # path('/', views., name=''),
]
