FROM node:9.10.1

WORKDIR /work

RUN npm install -g gatsby-cli

RUN cd /work && npm install
