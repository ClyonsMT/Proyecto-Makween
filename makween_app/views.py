from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test

# Create your views here.
def home(request):
    return render(request, 'makween_app/home.html')

def nosotros(request):
    return render(request, 'makween_app/nosotros.html')

def contactos(request):
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
    return render(request, 'makween_app/atenciones.html')

@user_passes_test(lambda u: u.groups.filter(name='Mecánico/ca').count() == 1, login_url='/accounts/login/')
@login_required
def formulario(request):
    return render(request, 'makween_app/formulario.html')

def Perfil(request):
    return render(request, 'makween_app/Perfil.html')