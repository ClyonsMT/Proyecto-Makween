# Generated by Django 4.2.1 on 2023-06-23 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('makween_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id_categoria', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=80)),
            ],
        ),
    ]