from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User, Group
from .models import Atencion, Estado_atencion

class CustomUserCreationForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=True, label="Nombres")
    last_name = forms.CharField(max_length=30, required=True, label="Apellidos")
    email = forms.EmailField(max_length=254, required=True, label="Correo")
    groups = forms.ModelChoiceField(
        queryset=Group.objects.all(),
        required=True,
        label='Tipo de usuario',
        widget=forms.RadioSelect,
    )

    class Meta:
       model = User 
       fields = [
          'username',
          'first_name',
          'last_name',
          'email',
          'groups',
       ]

class AtencionForm(forms.ModelForm):
    
    estado = forms.ModelChoiceField(
        queryset=Estado_atencion.objects.all(),
        required=True,
        label='Aprueba o rechaza la publicación',
    )
    descripcion_estado = forms.CharField(widget=forms.Textarea(attrs={'rows': 8}), label="Descripción opcional (si rechaza la publicación, explique por qué lo hizo)", required=False)

    class Meta:
        model = Atencion
        fields = ["estado", "descripcion_estado"]