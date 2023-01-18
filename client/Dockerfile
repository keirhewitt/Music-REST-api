FROM node:16

COPY package*.json ./
RUN npm install

ADD src/App.js /client/src/

WORKDIR /client/