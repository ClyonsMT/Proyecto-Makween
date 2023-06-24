from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="home"),
    path('nosotros/', nosotros, name="nosotros"),
    path('contactos/', contactos, name="contactos"),
    path('login/', login, name="login"),
    path('registro/', registro, name="registro"),
    path('formulario/', formulario, name="formulario"),
    path('Perfil/', Perfil, name="Perfil"),
    path('atenciones/', atenciones, name="atenciones"),
    path('guardar/', guardar, name="guardar"),
]