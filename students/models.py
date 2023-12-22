from django.db import models

# Create your models here.

class Student(models.Model):
    studentName = models.CharField(max_length = 25)
    studentClass = models.IntegerField()
    studentAge = models.IntegerField()
    studentAddress = models.CharField(max_length = 30)
    def __str__(self) -> str:
        return self.studentName

class Courses(models.Model):
    courseName = models.CharField(max_length = 20)
    courseInstructor = models.CharField(max_length = 20)
    courseDuration = models.IntegerField()

class Registration(models.Model):
    student = models.ForeignKey(Student,on_delete = models.CASCADE)
    course = models.ForeignKey(Courses,on_delete = models.CASCADE)