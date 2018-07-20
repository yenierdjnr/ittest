FROM node:10.6.0-slim

WORKDIR /work

RUN apt-get update && apt-get install --assume-yes \
  awscli \
  bzip2 \
  jq \
  libpng-dev
