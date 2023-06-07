from django.shortcuts import render

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
    return render(request, 'makween_app/registro.html')