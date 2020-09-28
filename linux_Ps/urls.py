"""linux_Ps URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from djangobin import views

urlpatterns = [
    url(r'^$', views.index), #The orginal index page - localhost:8000/
    # url(r'^ls/', views.runcommand), #For executing first command - localhost:8000/ls
    # url(r'^lsla/', views.runcommand2), #For executing second command - localhost:8000/lsla
    url(r'^admin/', admin.site.urls),
    url(r'^cpu/', views.cpu),
    url(r'^mem/', views.mem),
    url(r'^db/', views.db),
    url(r'^maxcpu/', views.maxcpu),
    url(r'^maxmem/', views.maxmem),
    url(r'^cpuview/', views.GetCpuView),

]
