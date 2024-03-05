from django.urls import path
from .views import Login, SignIn

urlpatterns = [
    path('signin/', SignIn.as_view()),
    path('login/', Login.as_view()),
]