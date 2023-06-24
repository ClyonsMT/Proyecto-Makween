from django.contrib import admin
from .models import Contactos, Atencion, Estado_atencion, Categoria
# Register your models here.
admin.site.register(Contactos)
admin.site.register(Atencion)
admin.site.register(Estado_atencion)
admin.site.register(Categoria)