from rest_framework import serializers
from Todo.models import Item

__author__ = 'alek'

class ItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = Item
		fields = ('id', 'todo')