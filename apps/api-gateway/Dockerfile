FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY pahacke.lock.json ./

RUN npm install

COPY . .
