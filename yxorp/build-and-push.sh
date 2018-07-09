#!/usr/bin/env sh
set -o errexit -o xtrace

REGION='us-east-1'
REPO='712687943642.dkr.ecr.us-east-1.amazonaws.com'
NAME='itprotv-marketing'
TAG="commit-$( git rev-parse HEAD )"

LOGIN=$( aws ecr get-login --no-include-email --region "$REGION" )
$LOGIN

docker build --tag "$REPO/$NAME:$TAG" .
docker push "$REPO/$NAME:$TAG"
