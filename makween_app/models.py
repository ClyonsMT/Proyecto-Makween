from django.db import models

# Create your models here.
class Contactos(models.Model):
    id_contacto = models.AutoField(primary_key=True)
    Correo = models.CharField(max_length=50)
    nombre_completo = models.CharField(max_length=70)
    rut = models.CharField(max_length=70)
    telefono = models.CharField(max_length=12)
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre_completo
    
class Estado_atencion(models.Model):
    nombre = models.CharField(max_length=80)

    def __str__(self):
        return self.nombre
    
class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=80)

    def __str__(self):
        return self.nombre
    
class Atencion(models.Model):
    id_atencion = models.AutoField(primary_key=True)
    id_mecanico = models.IntegerField()
    nombre_mecanico = models.CharField(max_length=50)
    nombre_cli = models.CharField(max_length=50)
    rut = models.CharField(max_length=12)
    telefono_cliente = models.IntegerField()
    descripcion = models.TextField()
    fecha = models.DateField(null=True)
    imagen = models.ImageField(upload_to="atenciones", null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.PROTECT, default=0)
    estado = models.ForeignKey(Estado_atencion, on_delete=models.PROTECT)
    descripcion_estado = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_cli
    
class mecanico(models.Model):
    id_meca = models.AutoField(primary_key=True)
    nombre = models.CharField(null=False, max_length=100)
    imagen = models.ImageField(upload_to="mecanico", null=False)

    def __str__(self):
        return self.nombre