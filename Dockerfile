# base image
FROM node:12.14.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn

# add app
COPY . /app

# start app
CMD yarn start --host 0.0.0.0
