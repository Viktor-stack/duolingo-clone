FROM node:21-alpine3.18
FROM npm:10

RUN npm install

EXPOSE 3000