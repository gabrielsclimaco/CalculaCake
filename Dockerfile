FROM node:alpine

RUN yarn global add quasar-cli && mkdir /app
ADD package.json /app/package.json
WORKDIR /app
RUN yarn
ADD . /app

CMD quasar dev -p