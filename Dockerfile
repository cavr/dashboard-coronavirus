FROM node:12 as build-stage
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn run build



FROM node:12
WORKDIR /usr/src/app
COPY --from=build-stage /usr/src/app/build/ /usr/src/app/build
COPY --from=build-stage /usr/src/app/scripts/ /usr/src/app/scripts
WORKDIR /usr/src/app/scripts
RUN yarn install
CMD ["yarn", "run",  "start"]