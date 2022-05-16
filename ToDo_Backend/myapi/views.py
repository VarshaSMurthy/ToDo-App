from django.shortcuts import render
from .serializers import ToDoSerializer
from .models import ToDo
from rest_framework import viewsets

# Create your views here.
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
