FROM node:boron-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install && \
    chown --recursive node:node .

USER node

EXPOSE 8080
CMD [ "npm", "start" ]

