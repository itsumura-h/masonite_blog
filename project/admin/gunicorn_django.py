import multiprocessing

socket_path = 'unix:/var/run/django.sock'
bind = socket_path

# Worker Processes
workers = 1
worker_class = 'sync'

# Logging
logfile = '/home/www/masonite_blog/project/admin/log.log'
loglevel = 'info'
logconfig = None