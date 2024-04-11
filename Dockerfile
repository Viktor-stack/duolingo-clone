FROM node:21-alpine3.18
FROM npm@latest

RUN npm install

EXPOSE 3000