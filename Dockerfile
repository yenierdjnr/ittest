FROM node:10.6.0-alpine

WORKDIR /work

# aws-cli is only in edge currently :/ python is needed by something during gatsby build
RUN apk update && apk add -X http://dl-3.alpinelinux.org/alpine/edge/testing aws-cli vips-dev fftw-dev && apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool jq python && cd /work && yarn install
