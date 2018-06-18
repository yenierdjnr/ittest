#!/bin/sh
docker-compose exec marketing /bin/sh -c "./dataPopulateHelper.sh $@"
