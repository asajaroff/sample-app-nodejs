FROM node:lts-stretch-slim

WORKDIR /sample-app

COPY src .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
