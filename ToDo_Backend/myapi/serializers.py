# serializers.pyfrom rest_framework import serializers
from rest_framework import serializers
from .models import ToDo

class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ToDo
#        fields = '__all__'
        fields = ('name',)
