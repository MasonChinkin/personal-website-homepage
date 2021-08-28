FROM node:16.8.0-alpine
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build
RUN npm run server:compile

EXPOSE 8010

CMD [ "node", "server.js" ]