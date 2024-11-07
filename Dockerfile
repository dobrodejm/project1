FROM nginx:1.27.2-alpine-slim
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./html /usr/share/nginx/html