FROM node:8.11.3

WORKDIR /work

RUN apt-get update && apt-get install -y awscli jq && cd /work && yarn install
