#!/bin/bash

sed -i -e "s/index.html/blog/" build/service-worker.js
sed -i -e "s?precache-manifest?static/precache-manifest?" build/service-worker.js
mv build/precache-manifest.* build/static/