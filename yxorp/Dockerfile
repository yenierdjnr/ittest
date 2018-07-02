FROM nginx:1.15.0-alpine
COPY template.nginx /etc/nginx/conf.d/default.template
ENV PROXY_URL http://marketing:8000
EXPOSE 80
CMD sh -c 'envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g "daemon off;"'
