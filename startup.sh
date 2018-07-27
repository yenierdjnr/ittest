#!/bin/sh

set -e
set -x

CMD=$1

yarn install

case "$CMD" in
  "develop")
      yarn run gatsby develop --verbose -H 0.0.0.0
    ;;
  "build")
      yarn run gatsby build --verbose
      ;;
  *)
    echo "Unknown command, Gatsby has been shot, exiting"
    exit 1
    ;;
esac;
