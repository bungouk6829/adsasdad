# Generated by Django 3.1.4 on 2020-12-22 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_information_call_attr'),
    ]

    operations = [
        migrations.AddField(
            model_name='information',
            name='check_call',
            field=models.CharField(blank=True, max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='information',
            name='call_attr',
            field=models.CharField(blank=True, choices=[('bad', '진상고객'), ('customer', '계약함'), ('call', '상담전화했음')], max_length=80, null=True, verbose_name='상태'),
        ),
        migrations.AlterModelTable(
            name='information',
            table='informations',
        ),
    ]