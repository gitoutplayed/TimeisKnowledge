# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-04 12:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fact_name', models.TextField()),
                ('sentence', models.TextField()),
                ('equation', models.TextField()),
                ('did_you_know', models.TextField()),
                ('link', models.TextField()),
            ],
        ),
    ]
