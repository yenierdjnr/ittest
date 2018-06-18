#/bin/sh

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

# The "meat" of the work is just to get the filename we should write out to. This abstracts most of the work away into something shared
write_data_file()
{
    # The first argument to the function should be the key we'll get with jq
    KEYNAME=$1

    # The second argument should be the url to hit
    URL_STR=$2

    # The third argument should be the subdirectory under data to save the file in
    SUBDIR=$3

    RESP=`curl -s $URL_STR`
    # remove control characters from the response and get the name (extra controls can cause jq to barf... yaaaay)
    NAME=`/bin/echo $RESP | tr -d '[:cntrl:]' | jq -r .$KEYNAME`
    # Get the first word and make it lowercase
    FST_WORD=`/bin/echo $NAME | cut -d \  -f 1 | tr '[:upper:]' '[:lower:]'`
    # get the rest of the words, remove spaces and /s
    RST=`/bin/echo $NAME | cut -s -d \  -f 2 | tr -d '[:space:]' | cut -d \/ -f 1`
    # Put it back together, and delete any extra ,s and /s because those happen...
    FILENAME=`/bin/echo $FST_WORD$RST | tr -d '[,/]' | tr -d '/'`.json
    /bin/echo $RESP | jq '.' > "data/$SUBDIR/$FILENAME"
}

CATS=`curl -s $URL_BASE/api/marketing/v1/populate/tag-categories | jq '."tagCategories"' | tr -d '[:space:]\[\]\,' | tr '""' ' '`
for url in $CATS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/tag-categories/$url"
    write_data_file tagcategoryname $URL_STR tagCategories
done

TAGS=`curl -s $URL_BASE/api/marketing/v1/populate/tags | jq '."tags"' | tr -d '[:space:]\[\]\,' | tr '""' ' '`
for url in $TAGS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/tags/$url"
    write_data_file tagname $URL_STR tags
done

COURSES=`curl -s $URL_BASE/api/marketing/v1/populate/courses | jq '."courses"' | tr -d '[:space:]\[\]\,' | tr '""' ' '`
for url in $COURSES
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/courses/$url"
    write_data_file name $URL_STR courses
done

VLABS=`curl -s -H "Content-Type: application/json" $URL_BASE/api/marketing/v1/populate/practice-labs | jq '."tags"' | tr -d '[:space:]\[\]\,' | tr '""' ' '`
for url in $VLABS
do
    URL_STR="$URL_BASE/api/marketing/v1/populate/practice-labs/$url"
    write_data_file vlabcategory $URL_STR vLabs
done
