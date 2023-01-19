FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install && \
    npm install -g nodemon && \
    npm rebuild bcrypt --build-from-source
COPY . .

EXPOSE 8000

CMD ["nodemon", "server.js"]
