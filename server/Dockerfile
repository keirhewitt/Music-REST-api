FROM node:16

COPY package*.json ./
RUN npm install

ADD server.js /server/

WORKDIR /server/