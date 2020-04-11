FROM node:8.11.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN yarn

CMD yarn start

EXPOSE 3000

