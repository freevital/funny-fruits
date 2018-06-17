FROM nginx:1.14-alpine

LABEL maintainer="Vital Kravchyshyn <vital.kravchyshyn@gmail.com>"

COPY nginx.conf /etc/nginx/nginx.conf
COPY public /app