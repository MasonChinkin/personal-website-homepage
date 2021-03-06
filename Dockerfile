FROM node:15.11.0-alpine
WORKDIR /usr/src/app

COPY package.json ./

RUN apk add g++ make python
RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build
RUN npm run server:compile

EXPOSE 8010

CMD [ "node", "server.js" ]