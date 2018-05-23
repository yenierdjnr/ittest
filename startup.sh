#!/bin/sh

set -e
set -x

CMD=$1
yarn global add gatsby-cli@1.1.52

case "$CMD" in
  "develop")
    gatsby develop --verbose -H 0.0.0.0
    ;;
  "build")
    gatsby build --verbose
    ;;
  *)
    echo "Unknown command, Gatsby has been shot, exit 1"
    exit 1
    ;;
esac;
