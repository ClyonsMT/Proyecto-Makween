from django.db import models

# Create your models here.
class Usuarios(models.Model):
    nombre_completo = models.CharField(max_length=70)
    Correo = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre_completo