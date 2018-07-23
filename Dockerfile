FROM node:10.6.0-alpine

WORKDIR /work

# aws-cli is only in edge currently :/
RUN apk update && apk add -X http://dl-3.alpinelinux.org/alpine/edge/testing aws-cli vips-dev fftw-dev && apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool jq python && cd /work && yarn install

# FROM node:10.6.0-slim

# WORKDIR /work

# RUN apt-get update && apt-get install --assume-yes \
#  awscli \
#  bzip2 \
#  jq \
#  vips-dev \
#  libpng-dev