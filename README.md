# gatsby
https://github.com/gatsbyjs/gatsby

## Clone repo

`git clone git@github.com:EdutainmentLIVE/itprotv-marketing.git`

`cd` into the project folder

## Run in docker

Run `docker-compose up`, this will build the docker container for gatsby and install the needed node modules. Go grab some coffee or snacks while it builds. Thanks npm...

## Install
`npm install --global gatsby-cli`

then run

`npm install`

and finally

`gatsby develop --verbose`

## Build

>All the files to make the animations work are in the `src/static` folder. After the initial production build the static files in the `src/static` folder will need to be copied over manually into the `public/static` folder. Once this is done initially every subsequent build will preserve the animation files.

`gatsby build` outputs the build into a `public` directory
