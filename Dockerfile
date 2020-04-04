FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn run install
COPY . ./
RUN yarn run build
RUN yarn run install:server

EXPOSE 4000

CMD ["yarn", "run",  "start:prod"]