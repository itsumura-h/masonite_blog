#!/bin/bash
#pgrep uwsgi | xargs kill -9
killall uwsgi
service nginx restart
nohup uwsgi --ini masonite.ini > /dev/null 2>&1 &

