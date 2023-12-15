from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Student,Courses,Registration
from django.views.decorators.csrf import csrf_protect,csrf_exempt
import json

# Create your views here.

def indexpage(request):
    return HttpResponse ("Helloworld")

@csrf_exempt
def students(request):
    if (request.method == "GET"):
        data = list(Student.objects.values())
        
        return JsonResponse(data,safe=False)
    
    elif (request.method == "POST"):
        #bodyData = Student(request.POST)
        jsonData = json.loads(request.body)
        print (jsonData)
        sname = jsonData["studentName"]
        sclass = jsonData["studentClass"]
        sage = jsonData["studentAge"]
        saddress = jsonData["studentAddress"]
        student = Student(studentName= sname, studentClass = sclass, studentAge = sage, studentAddress = saddress)
        student.save()
        return JsonResponse(jsonData,safe=False)