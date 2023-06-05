from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'makween_app/home.html')

def nosotros(request):
    return render(request, 'makween_app/nosotros.html')

def contacto(request):
    return render(request, 'makween_app/contacto.html')