from django.urls import path
from .views import home, nosotros, contactos, login, registro

urlpatterns = [
    path('', home, name="home"),
    path('nosotros/', nosotros, name="nosotros"),
    path('contactos/', contactos, name="contactos"),
    path('login/', login, name="login"),
    path('registro/', registro, name="registro"),
]