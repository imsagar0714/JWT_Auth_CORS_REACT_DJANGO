from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import ListAPIView
from base.models import Note
from .serializers import Noteserializer
from rest_framework.permissions import IsAuthenticated

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        return token


class MyTokenObtainpairview(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes=[
        'api/token',
        'api/token/refresh'
    ]
    return Response(routes)


class getNotes(ListAPIView):
    serializer_class=Noteserializer
    permission_classes=[IsAuthenticated]
    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)
    