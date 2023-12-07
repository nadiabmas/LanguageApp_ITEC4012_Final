from django.shortcuts import redirect, render
from .forms import *
from .models import Question, Option, UserAnswer
from django.contrib.auth.decorators import login_required
from django.db.models import Count


# Sign in form
def index(request):
    if request.method == 'POST':
        form = SignInForm(data=request.POST)
        if form.is_valid():
            return redirect('pick_language')
    else:
        form = SignInForm()
    return render(request, 'index.html', {'form': form})


def submit_answer(request, question_id, option_id):
    question = Question.objects.get(pk=question_id)
    option = Option.objects.get(pk=option_id)
    user_answer = UserAnswer(user=request.user, question=question, option=option)
    user_answer.save()
    correct_options = Option.objects.filter(question=question, is_correct=True)
    score = 0
    for correct_option in correct_options:
        if UserAnswer.objects.filter(user=request.user, question=question, option=correct_option).exists():
            score += 1
    score = score / question.quiz.question_set.count() * 100
    return render(request, 'progress.html', {'score': score})


# Render html files
def pick_language(request):
    return render(request, 'pick_language.html')


def error_language(request):
    return render(request, 'error_language.html')


def dashboard(request):
    return render(request, 'dashboard.html')


def lessons(request):
    return render(request, 'lessons.html')


def quizzes(request):
    return render(request, 'quizzes.html')


def quiz_1(request):
    return render(request, 'quiz_1.html')


def quiz_2(request):
    return render(request, 'quiz_2.html')


def quiz_3(request):
    return render(request, 'quiz_3.html')


def progress(request):
    return render(request, 'progress.html')
