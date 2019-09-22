# Build react app artifact in cache
FROM node:12.10.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install
COPY . ./
RUN npm run build

# Only deploy the artifact
FROM nginx:1.17.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]