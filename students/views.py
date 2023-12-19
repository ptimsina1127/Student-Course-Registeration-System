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
    
@csrf_exempt
def courses(request):
    if (request.method =="POST"):
        jsonData = json.loads(request.body)
        cname = jsonData["courseName"]
        cinstructor = jsonData["courseInstructor"]
        cduration = jsonData["courseDuration"]
        course = Courses(courseName= cname, courseInstructor = cinstructor, courseDuration = cduration)
        course.save()
        return JsonResponse(jsonData,safe=False)
    elif(request.method=="GET"):
        data = list(Courses.objects.values())
        return JsonResponse(data,safe=False)
    
@csrf_exempt
def registeration(request):
    if (request.method=="GET"):
        return HttpResponse("This is a Registeration Page")
    elif(request.method=="POST"):
        jsonData = json.loads(request.body)
        #print(request.body)
        #print (jsonData)
        studentid = jsonData["studentID"]
        courseid =jsonData["courseID"]
        student_obj = Student.objects.get(id = studentid)
        course_obj =  Courses.objects.get(id=courseid)
        registeration = Registration(student=student_obj ,course = course_obj)
        registeration.save()
        return JsonResponse(jsonData,safe="False")