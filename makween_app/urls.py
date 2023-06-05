from django.urls import path
from .views import home, nosotros, contactos

urlpatterns = [
    path('', home, name="home"),
    path('nosotros/', nosotros, name="nosotros"),
    path('contactos/', contactos, name="contactos"),
]