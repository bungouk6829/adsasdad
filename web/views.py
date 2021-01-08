from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse
from datetime import datetime
from .models import *

def news(request):
    try:
        return render(request, 'web/news.html')
    except Exception:
        return HttpResponse(status=404)

def ai(request):
    try:
        return render(request, 'web/ai.html')
    except Exception:
        return HttpResponse(status=404)

def talk(request):
    try:
        return render(request, 'web/talk.html')
    except Exception:
        return HttpResponse(status=404)

def form(request):
    try:
        return render(request, 'web/form.html')
    except Exception:
        return HttpResponse(status=404)

def agreement(request):
    try:
        return render(request, 'web/agreement.html')
    except Exception:
        return HttpResponse(status=404)

def check_pre_call(number):
    try:
        if Information.objects.filter(phone_number=number):
            return '중복 DB'
        else:
            return '새로운 DB'
    except Exception:
        return HttpResponse(status=404)

def check_bad_call(number):
    try:
        if len(Information.objects.filter(phone_number=number)) > 0:
            db = Information.objects.filter(phone_number=number).last()
            if (datetime.now() - db.create_at).days < 1:
                return False
            else:
                return True
        else:
            return True
    except Exception:
        return HttpResponse(status=404)

def new_information(request):
    try:
        if request.method == "POST":
            number = str(request.POST['phone_number_1']) + str(request.POST['phone_number_2']) + str(request.POST['phone_number_3'])
            if check_bad_call(number):
                check_param = check_pre_call(number)
                Information.objects.create(
                    phone_number = number,
                    check_call = check_param
                )
                return render(request, 'web/new_information.html')
            else:
                return render(request, 'web/exist_err.html')

        else:
            return HttpResponse(status=404)

    except Exception:
        return HttpResponse(status=404)
