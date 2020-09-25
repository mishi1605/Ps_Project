# Production Support Project 2
#linux_Ps
Open terminal in CentOS (login as a root user) and execute the following commands:

sudo yum install epel-release

sudo yum install python-django

django-admin --version

Then download this project and go to this directory using terminal and run:

python manage.py migrate

python manage.py runserver

Go to the browser and enter the following:

http://localhost:8000/

# CORS ERROR

## For Chrome Users - Open Google chrome and disable CORS

google-chrome --disable-web-security

#### Or Alternatively

Install [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) on Chrome

## For Firefox Users - 

Then enter into the project directory from terminal and run:

yum install python-pip

pip install --upgrade pip

pip install django-cors-headers

yay !!
The project works!