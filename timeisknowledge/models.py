from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
class Fact(models.Model):
    fact_name = models.CharField(max_length=30)
    sentence = models.TextField()
    equation = models.TextField()
    did_you_know = models.TextField()
    link = models.CharField(max_length=50)

    def __str__(self):
        return self.fact_name
