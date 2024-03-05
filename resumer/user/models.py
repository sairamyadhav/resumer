from datetime import datetime

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    linkedin = models.CharField(max_length=64, default='', blank=True, null=True)
    phone = models.CharField(max_length=10, default='', blank=True, null=True)
    full_name = models.CharField(max_length=32, null=False, blank=False)
    email = models.CharField(max_length=32, null=False, blank=False)
    email_consider = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name

class Project(models.Model):
    user = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    project_name = models.CharField(max_length=64, blank=False, null=False)
    project_description = models.CharField(max_length=254, blank=False, null=False)
    github_link = models.CharField(max_length=128, default='', blank=True, null=False)
    live = models.CharField(max_length=128, default='', blank=True, null=False)

    def __str__(self):
        return self.project_name

class Experience(models.Model):
    user = models.ForeignKey(Profile, related_name='experiences', on_delete=models.CASCADE)
    company = models.CharField(max_length=32, blank=False, null=False)
    role = models.CharField(max_length=32, blank=False, null=False)
    from_date = models.DateField(blank=False, null=False)
    to_date = models.DateField(default=datetime.now())
    current = models.BooleanField(default=False)
    description = models.CharField(max_length=254, default='', blank=True, null=True)

    def __str__(self):
        return self.company

class Education(models.Model):
    user = models.ForeignKey(Profile, related_name='educations', on_delete=models.CASCADE)
    university = models.CharField(max_length=128, blank=False, null=False)
    specialization = models.CharField(max_length=128, blank=False, null=False)
    from_date = models.DateField(blank=False, null=False)
    to_date = models.DateField(blank=False, null=False)

    def __str__(self):
        return self.university