FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install npm@latest

COPY . .

RUN npm install --prefix ./client/

RUN npm run --prefix ./client/ build

EXPOSE 4000

CMD ["npm", "start"]

