#!/bin/bash
# source ../../.vpy7/bin/activate
source ../../.py36711/bin/activate
nohup gunicorn admin.wsgi --config gunicorn_django.py > /dev/null 2>&1 &
