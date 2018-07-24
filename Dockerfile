FROM node:10.7.0-stretch

WORKDIR /work

RUN apt-get update && apt-get install --assume-yes awscli jq libpng-dev libvips-dev
