#! /bin/bash
yarn build:server
heroku login
heroku container:login
heroku container:push --app=radiant-journey-75961 web
heroku container:release --app=radiant-journey-75961 web
# docker build -t asuspeg/abb:latest .
# docker push asuspeg/abb:latest
# ssh root@104.248.91.217 "docker pull asuspeg/abb:latest && docker tag asuspeg/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"