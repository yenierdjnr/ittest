FROM nginx:1.12.2-alpine

WORKDIR /main

ADD start /main/start
ADD conf.d /etc/nginx/conf.d
ADD www /var/www

CMD /main/start
