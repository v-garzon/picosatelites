FROM node:18

WORKDIR /app

COPY package*.json ./

RUN pwd && ls

RUN npm install npm@8.19.2

RUN npm install

COPY . .

EXPOSE 4000



