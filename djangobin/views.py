# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import HttpResponse
import subprocess

#This method is acting like basic index.html for every project
def index(request):
     return render(request,'index.html')

#This method is executing 1st command
# def runcommand(request):
#     process = subprocess.Popen('ls', 
#     shell=True, 
#     stdout=subprocess.PIPE, 
#     stderr=subprocess.PIPE )
#     return HttpResponse(process.stdout)

# #This method is executing 2nd command
# def runcommand2(request):
#     process = subprocess.Popen('ls -la', 
#     shell=True, 
#     stdout=subprocess.PIPE, 
#     stderr=subprocess.PIPE )
#     return HttpResponse(process.stdout)

def cpu(request):
    process = subprocess.Popen('top -b -n1 | grep ^%Cpu | awk \'{print 100-$8}\'', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)

    # import psutil
    # return HttpResponse(psutil.cpu_percent());

def mem(request):

    process = subprocess.Popen('free | grep Mem | awk \'{print $3/$2 * 100.0}\'',
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)

    # import psutil
    #import random
    # return HttpResponse(psutil.virtual_memory().percent);

def db(request):
    #TO DO: Returns a random number that may or may not be db trend :)
    #we have to find command for this
    import random
    return HttpResponse(random.randint(0,100));

def maxcpu(request):
    #TO DO: Return the json object in response
    #filter the command to get the required things
    process = subprocess.Popen('ps -eo pid,ppid,cmd,%cpu --sort=-%cpu | head', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)

def maxmem(request):
    #TO DO: Return the json object in response
    #filter the command to get the required things
    process = subprocess.Popen('ps -eo pid,ppid,cmd,%mem --sort=-%mem | head', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)


