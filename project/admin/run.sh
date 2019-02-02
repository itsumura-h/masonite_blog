#!/bin/bash
nohup gunicorn wsgi --config gunicorn_django.py > /dev/null 2>&1 &
