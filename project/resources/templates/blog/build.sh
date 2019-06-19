# main.********.chunk.jsを遅延読み込み
sed -i -e s?'<script src="/static/js/main'?'<script async src="/static/js/main'? build/index.html

# main.********.chunk.cssを遅延読み込み
sed -i -e s?'<link href="/static/css/main'?'<link rel="preload" href="/static/css/main'? build/index.html