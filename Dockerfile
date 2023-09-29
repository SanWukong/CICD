FROM nginx:latest

RUN echo "hello friend" > /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
