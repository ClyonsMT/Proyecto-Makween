# Generated by Django 4.2.1 on 2023-06-23 19:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('makween_app', '0002_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='atencion',
            name='categoria',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.PROTECT, to='makween_app.categoria'),
        ),
    ]
