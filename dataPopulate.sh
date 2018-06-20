#!/bin/sh
docker-compose run marketing /bin/sh -c "./dataPopulateHelper.sh $@"
