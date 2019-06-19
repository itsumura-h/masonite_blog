# main.********.chunk.jsを遅延読み込み
sed -i -e s?'<script src="/static/js/main'?'<script async src="/static/js/main'? build/index.html
