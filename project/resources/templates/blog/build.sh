#!/bin/bash

# service-worker.jsの「index.html」を「blog」に置換
sed -i -e "s/index.html/blog/" build/service-worker.js

# service-worker.jsの「precache-manifest」を「static/precache-manifest」に置換
sed -i -e "s?precache-manifest?static/precache-manifest?" build/service-worker.js
# precache-manifestのファイルをstatic以下に移動
mv build/precache-manifest.* build/static/

# asset-manifest.jsonの「index.html」を「/blog」に置換
sed -i -e "s?/index.html?/blog?" build/asset-manifest.json