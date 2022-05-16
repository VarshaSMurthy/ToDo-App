from django.db import models

# Create your models here.
class ToDo(models.Model):
    name = models.CharField(max_length=200)
    #alias = models.CharField(max_length=60)    
    def __str__(self):
        return self.name
