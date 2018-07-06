#!/bin/sh

FILES=`ls | grep jpg`
for f in $FILES
do
  convert $f -quality 85 $f
done
