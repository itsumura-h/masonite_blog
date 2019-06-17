#!/bin/bash
# source ../.vpy7/bin/activate
source ../.py36711/bin/activate
killall gunicorn
service nginx restart
nohup gunicorn wsgi --config gunicorn_masonite.py > /dev/null 2>&1 &
