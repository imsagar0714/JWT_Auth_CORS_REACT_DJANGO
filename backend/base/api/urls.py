from django.urls import path
from . import views
from .views import MyTokenObtainpairview,getNotes
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainpairview.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/',getNotes.as_view(),name='get_notes')
]
