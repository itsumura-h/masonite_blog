#!/bin/bash
nohup uwsgi --ini django.ini > /dev/null 2>&1 &
