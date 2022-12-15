FROM node

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install npm@latest

RUN npm install

RUN npm --prefix ./client/ install

RUN npm run --prefix ./client/ build

EXPOSE 4000

CMD ["npm", "start"]

