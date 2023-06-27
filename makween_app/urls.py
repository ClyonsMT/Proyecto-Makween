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
    path('guardar_contacto/', guardar_contacto, name="guardar_contacto"),
    path('atenciones_mecanico/', atenciones_mecanico, name="atenciones_mecanico"),
    path('calificar_atencion/<int:id>/', calificar_atencion, name="calificar_atencion"),
    path('contactos_admin/', contactos_admin, name="contactos_admin"),
    path('eliminar_contacto/<id>', eliminar_contacto, name="eliminar_contacto"),
    path('busqueda/', busqueda, name="busqueda")
]