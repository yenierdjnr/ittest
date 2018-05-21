FROM node:8.11.2

WORKDIR /work

RUN yarn global add gatsby-cli@1.1.52

RUN cd /work && yarn install
