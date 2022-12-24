FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install npm@latest

RUN npm install --prefix ./client/

RUN npm run --prefix ./client/ build

EXPOSE 4000

CMD ["npm", "start"]

