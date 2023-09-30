FROM node:18.18.0.0-alpine
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

COPY . ./

RUN npm run build

EXPOSE 8010

CMD [ "npm", "run", "server" ]