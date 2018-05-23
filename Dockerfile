FROM node:8.11.2

WORKDIR /work

RUN cd /work && yarn install
