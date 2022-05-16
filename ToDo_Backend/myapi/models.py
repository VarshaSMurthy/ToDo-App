from django.db import models

# Create your models here.
class ToDo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    completed = models.CharField(max_length=60,default='False')    
    def __str__(self):
        return self.name
