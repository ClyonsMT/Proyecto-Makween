# Generated by Django 4.2.1 on 2023-06-24 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('makween_app', '0004_atencion_fecha_alter_atencion_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='atencion',
            name='fecha',
            field=models.DateField(null=True),
        ),
    ]
