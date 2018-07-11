#!/bin/sh

set -e
set -x

CMD=$1
BUILD_ENV=$2

yarn install

case "$CMD" in
  "develop")
    MARKETING_ENV=development node --max-old-space-size=4096 node_modules/.bin/gatsby develop --verbose -H 0.0.0.0
    ;;
  "build")
      case "$BUILD_ENV" in
          "staging")
              MARKETING_ENV=staging node --max-old-space-size=4096 node_modules/.bin/gatsby build --verbose
              ;;
          "production")
              MARKETING_ENV=production node --max-old-space-size=2048 node_modules/.bin/gatsby build
              ;;
          *)
              echo "Not a branch for building, exiting"
              exit 1
              ;;
      esac;

    ;;
  *)
    echo "Unknown command, Gatsby has been shot, exiting"
    exit 1
    ;;
esac;
