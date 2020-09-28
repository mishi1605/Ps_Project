# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import HttpResponse
from .serializers import *
from djangobin.models import *
# from rest_framework.views import APIView
# from rest_framework.response import Response
import subprocess
# from django.http import JsonResponse

import json
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
  
    print type(process.stdout)
    print "\n"
    cpu_util = process.stdout.read()
    cpu_obj = Cpu.objects.create(percent_util_cpu = float(cpu_util))
    # print type(process.stdout.read())
    cpu_obj.save();
    # cpu_obj1 = Cpu.objects.get()
    return HttpResponse(cpu_util)

    # import psutil
    # return HttpResponse(psutil.cpu_percent());

def mem(request):

    process = subprocess.Popen('free | grep Mem | awk \'{print $3/$2 * 100.0}\'',
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    mem_util = process.stdout.read()
    mem_obj = Mem.objects.create(percent_util_mem = float(mem_util))
    mem_obj.save();
    return HttpResponse(mem_util)

    # import psutil
    #import random
    # return HttpResponse(psutil.virtual_memory().percent);

def db(request):
    #TO DO: Returns a random number that may or may not be db trend :)
    #we have to find command for this
    import random
    return HttpResponse(random.randint(20,60));

def maxcpu(request):
    process = subprocess.Popen('ps -eo pid,ppid,%cpu,cmd --sort=-%cpu | head -n 6 | tail -n 5', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    arr_cpu = " "
    for a in process.stdout:
        json_str = {'pid' :'', 'ppid': '','cpuUtilization': '', 'name':''}         
        print "intial json_str"
        print json_str
        print type(json_str)
        stri = a.split();
        print stri
        json_str['pid'] = stri[0]
        json_str['ppid'] = stri[1]
        json_str['cpuUtilization'] = stri[2]
        json_str['name'] = stri[3]
        print "checking json_str"
        print json_str
        print "\n"
        # print type(json_str)
        json_str = json.dumps(json_str)
        # print "print json dumps type"
        # print type(json_str)
        # print json_str
        # print type(str(json_str))
        new_str = str(json_str)
        # print new_str
        arr_cpu = arr_cpu + "?" + new_str
        # print arr_cpu
    
    # print "\n"
    # print "\n"
    # print arr_cpu 
    # print type(arr_cpu)
    # print "print its type"
    # print type(str(arr_cpu))
    # arr_cpu - list of string (1 string - json obj)
    # 
    # designacao= json.dumps( arr_cpu, cls=DjangoJSONEncoder)
    # return Response (json.loads(designacao))
    #I did this because I wanted to get rid of the backslash that was appearing in the json!!
    # arr = "-".join(arr_cpu)
    # print "\n"
    # print "\n"
    str_new = str(arr_cpu)
    # print str_new
    return HttpResponse(str_new)


def maxmem(request):
    #TO DO: Return the json object in response
    #filter the command to get the required things
    process = subprocess.Popen('ps -eo pid,ppid,%mem,cmd --sort=-%mem | head -n 6 | tail -n 5', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )

    arr_mem = " "
    
    for a in process.stdout:
        json_str = {'pid' :'', 'ppid': '', 'memory_utilization': '', 'name':''}
        # print type(json_str)
        stri = a.split();
        # print str
        json_str['pid'] = stri[0]
        json_str['ppid'] = stri[1]
        json_str['name'] = stri[3]
        json_str['memory_utilization'] = stri[2]
        # print json_str
        # print "\n"
        # print type(json_str)
        json_str = json.dumps(json_str)
        # print "print json dumps type"
        # print type(json_str)
        # print json_str
        # print type(str(json_str))
        new_str = str(json_str)
        arr_mem = arr_mem + "#" + new_str
        str_new = str(arr_mem)
    # print str_new
    # return HttpResponse(process.stdout)
   
    return HttpResponse(str_new)


   

def GetCpuView(request):
    lists = Cpu.objects.all()
    # print lists

    for a in lists:
        print a.percent_util_cpu, a.time_cpu
        print "\n"

    print "\n"
    # serializer = CpuSerializer(lists,many=True)
    return HttpResponse("success")


def GetMemView(request):
    lists = Mem.objects.all()
    # print lists

    for a in lists:
        print a.percent_util_mem, a.time_mem
        print "\n"

    print "\n"
    # serializer = CpuSerializer(lists,many=True)
    return HttpResponse("success")
