#!/bin/bash
killall gunicorn
service nginx restart
nohup gunicorn wsgi --config gunicorn_masonite.py > /dev/null 2>&1 &