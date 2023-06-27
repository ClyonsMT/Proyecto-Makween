from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm, AtencionForm
from django.contrib import messages
from .models import Atencion, Estado_atencion, Categoria, Contactos
from django.contrib.auth.models import User

from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test

# Create your views here.
def home(request):

    atenciones_aprobadas = Atencion.objects.select_related("categoria").filter(estado_id=2)

    data = {
        "atenciones_aprobadas" : atenciones_aprobadas
    }

    return render(request, 'makween_app/home.html', data)

def nosotros(request):
    return render(request, 'makween_app/nosotros.html')

def contactos(request):
    return render(request, 'makween_app/contactos.html')

def guardar_contacto(request):
    correo = request.POST['correo']
    nombre = request.POST['nombre']
    rut = request.POST['rut']
    telefono = request.POST['telefono']
    mensaje = request.POST['mensaje']

    objetoContacto = Contactos.objects.create(
        Correo = correo,
        nombre_completo = nombre,
        rut = rut,
        telefono = telefono,
        mensaje = mensaje,
    )
    
    objetoContacto.save()
    messages.success(request, 'Su mensaje fué enviado exitosamente, esté atento a su correo o telefono')
    return render(request, 'makween_app/contactos.html')

def login(request):
    return render(request, 'makween_app/login.html')

@user_passes_test(lambda u: u.groups.filter(name='Administrador/ra').count() == 1, login_url='/accounts/login/')
@login_required
def registro(request):
    data = {
        'form' : CustomUserCreationForm()
    }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            user = formulario.save(commit=False)
            user.first_name = formulario.cleaned_data['first_name']
            user.last_name = formulario.cleaned_data['last_name']
            user.email = formulario.cleaned_data['email']
            user.save()
            user.groups.set([formulario.cleaned_data['groups']])
            #redirigir a login
            messages.success(request, 'Usuario registrado exitosamente')
            return redirect(to="Perfil")
        data["form"] = formulario

    return render(request, 'registration/registro.html', data)

@user_passes_test(lambda u: u.groups.filter(name='Administrador/ra').count() == 1, login_url='/accounts/login/')
@login_required
def atenciones(request):
    atenciones_pendientes = Atencion.objects.select_related("categoria").filter(estado_id=1)

    data = {
        "pendiente" : atenciones_pendientes
    }

    return render(request, 'makween_app/atenciones.html', data)


def calificar_atencion(request, id):

    atencion = get_object_or_404(Atencion, id_atencion=id)

    data = {
        'forms' : AtencionForm(instance=atencion) 
    }

    if request.method == 'POST':
        calificar = AtencionForm(data=request.POST, instance=atencion)
        if calificar.is_valid():
            calificar.save()
            messages.success(request, 'Atención calificada exitosamente')
            return redirect(to="atenciones")
        data["forms"] = calificar

    return render(request, 'makween_app/calificar.html', data)


@user_passes_test(lambda u: u.groups.filter(name='Mecánico/ca').count() == 1, login_url='/accounts/login/')
@login_required
def formulario(request):
    return render(request, 'makween_app/formulario.html')

@user_passes_test(lambda u: u.groups.filter(name='Mecánico/ca').count() == 1, login_url='/accounts/login/')
@login_required
def guardar(request):
    usuario = request.user
    id_mec = usuario.id
    nombre_mecanico = usuario.first_name + " " + usuario.last_name
    nombre_cli = request.POST["nombre"]
    rut = request.POST["rut"]
    telefono = request.POST["telefono"]
    descripcion = request.POST["descripcion"]
    fecha = request.POST["fecha"]
    imagen = request.FILES["imagen"]
    categoria_ate = Categoria.objects.get(pk=request.POST['categoria'])
    print(categoria_ate)
    estado_atencion = Estado_atencion.objects.get(nombre="Pendiente")

    objetoAtencion = Atencion.objects.create(
        id_mecanico = id_mec,
        nombre_mecanico = nombre_mecanico,
        nombre_cli = nombre_cli,
        rut = rut,
        telefono_cliente = telefono,
        fecha = fecha,
        descripcion = descripcion,
        imagen = imagen,
        categoria = categoria_ate,
        estado = estado_atencion
    )
    objetoAtencion.save()
    messages.success(request, 'Atención registrada exitosamente')
    return render(request, 'makween_app/formulario.html')

@login_required
def Perfil(request):
    usuario = request.user
    atenciones = Atencion.objects.filter(id_mecanico=usuario.id).count()
    usuarios_registrados = User.objects.all().count()
    data = {
        "atenciones" : atenciones,
        "usuarios" : usuarios_registrados
    }
    return render(request, 'makween_app/Perfil.html', data)

@user_passes_test(lambda u: u.groups.filter(name='Mecánico/ca').count() == 1, login_url='/accounts/login/')
@login_required
def atenciones_mecanico(request):
    usuario = request.user
    atenciones_listado = Atencion.objects.select_related("categoria").filter(id_mecanico=usuario.id)

    detalle_listado = Atencion.objects.select_related("categoria", "estado").filter(id_mecanico=usuario.id)

    data = {
        "atenciones" : atenciones_listado,
        "detalle" : detalle_listado
    }

    return render(request, 'makween_app/atenciones_mecanico.html', data)

@user_passes_test(lambda u: u.groups.filter(name='Administrador/ra').count() == 1, login_url='/accounts/login/')
@login_required
def contactos_admin(request):

    contacto = Contactos.objects.all()

    data = {
        "contactos" : contacto
    }

    return render(request, 'makween_app/contactos_admin.html', data)

def eliminar_contacto(request, id):
    contacto = get_object_or_404(Contactos, id_contacto=id)
    contacto.delete()
    return redirect(to='contactos_admin')