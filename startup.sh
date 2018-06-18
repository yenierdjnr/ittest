#!/bin/sh

set -e
set -x

CMD=$1
BUILD_ENV=$2
apt-get install -y jq
yarn global add gatsby-cli@1.1.52

yarn install

case "$CMD" in
  "develop")
    MARKETING_ENV=development gatsby develop --verbose -H 0.0.0.0
    ;;
  "build")
      case "$BUILD_ENV" in
          "staging")
              MARKETING_ENV=staging gatsby build --verbose
              ;;
          "production")
              MARKETING_ENV=production gatsby build --verbose
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
