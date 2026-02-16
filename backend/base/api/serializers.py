from rest_framework import serializers
from base.models import Note
class Noteserializer(serializers.ModelSerializer):
    class Meta:
        model=Note
        fields='__all__' 