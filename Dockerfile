FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]

