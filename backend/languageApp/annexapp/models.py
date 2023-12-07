from django.contrib.auth.models import User
from django.db import models


# For database of user profile (includes: name, username, and password)
class UserProfile(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)


class Quiz(models.Model):
    quiz_title = models.CharField(max_length=200)
    quiz_description = models.TextField()


class Question(models.Model):
    objects = None
    question_text = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)


class Option(models.Model):
    objects = None
    option_text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)


class UserAnswer(models.Model):
    objects = None
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)


