#!/bin/bash
nohup gunicorn admin.wsgi --config gunicorn_django.py > /dev/null 2>&1 &
