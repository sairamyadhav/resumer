from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password

# Create your views here.
class SignIn(APIView):

    @staticmethod
    def post(request):
        try:
            username, email = request.data.get('username', ''), request.data.get('email', '')
            password = request.data.get('password', '')
            if not (username and email):
                raise Exception("Username and Email are must")
            if not password:
                raise Exception("Password is must")
            user, created = User.objects.get_or_create(username=username, email=email)
            if not created:
                user = User.objects.filter(username=username)
                if len(user) > 0:
                    raise Exception("user with username already exists")
                raise Exception("user with email already exists")
            user.password = make_password(password)
            user.save()
            return Response({"message": "user created successfully"}, status=status.HTTP_200_OK)
        except Exception as error:
            return Response({"message": str(error)}, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):

    @staticmethod
    def post(request):
        try:
            username, password = request.data.get('username', ''), request.data.get('password', '')
            if not (username and password):
                raise Exception("username and password is required")
            user = User.objects.get(username=username)
            if user.check_password(password):
                return Response({"message": "user logged in successfully"}, status=status.HTTP_200_OK)
            return Response({"message": "wrong password"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({"message": "username not found"}, status=status.HTTP_400_BAD_REQUEST)