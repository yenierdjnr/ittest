#!/bin/sh

set -o errexit
set -o xtrace

case $1 in
    "staging")
        URL_BASE="https://staging-api.itpro.tv"
        ;;
    "dev")
        URL_BASE="http://api.itpro.test:8888"
        ;;
    "production")
        URL_BASE="https://api.itpro.tv"
        ;;
    *)
        echo "You didn't specify an environment, defaulting to prod"
        URL_BASE="https://api.itpro.tv"
        ;;
esac;

# Takes filename, url, and subdirectory, writing the response of url to filename in subdirectory
write_data_file()
{
    # The first argument to the function should be the filename to write to
    FILENAME=$1

    # The second argument should be the url to hit
    URL_STR=$2

    # The third argument should be the subdirectory under data to save the file in
    SUBDIR=$3

    curl -s "$URL_STR" | jq -M -s '.' > "data/$SUBDIR/$FILENAME.json"
}

CATS=$(curl -s $URL_BASE/api/marketing/v1/populate/tag-categories | jq -r '.tagCategories[]')
for url in $CATS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/tag-categories/$url"
    write_data_file "$url" "$URL_STR" tagCategories
done

TAGS=$(curl -s $URL_BASE/api/marketing/v1/populate/tags | jq -r '.tags[]')
for url in $TAGS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/tags/$url"
    write_data_file "$url" "$URL_STR" tags
done

COURSES=$(curl -s $URL_BASE/api/marketing/v1/populate/courses | jq -r '.courses[]')
for url in $COURSES
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/courses/$url"
    write_data_file "$url" "$URL_STR" courses
done

VLABS=$(curl -s $URL_BASE/api/marketing/v1/populate/practice-labs | jq -r '.tags[]')
for url in $VLABS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/practice-labs/$url"
    write_data_file "$url" "$URL_STR" vLabs
done
