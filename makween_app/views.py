from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'makween_app/home.html')

def nosotros(request):
    return render(request, 'makween_app/nosotros.html')

def contactos(request):
    return render(request, 'makween_app/contactos.html')

def login(request):
    return render(request, 'makween_app/login.html')

def registro(request):
    data = {
        'form' : CustomUserCreationForm()
    }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            #redirigir a login
            messages.success(request, 'Usuario registrado exitosamente')
            return redirect(to="login")
        data["form"] = formulario

    return render(request, 'registration/registro.html', data)

def formulario(request):
    return render(request, 'makween_app/formulario.html')