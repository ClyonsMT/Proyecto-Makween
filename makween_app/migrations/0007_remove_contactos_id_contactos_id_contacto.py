# Generated by Django 4.2.1 on 2023-06-27 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('makween_app', '0006_remove_estado_atencion_descripcion_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactos',
            name='id',
        ),
        migrations.AddField(
            model_name='contactos',
            name='id_contacto',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]