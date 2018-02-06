const sass = require('node-sass');
const postcss = require('postcss');
const fs = require('fs');
const inputDirectory = './src/stylesheets';

fs.readdir(inputDirectory, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function (inputFile, index) {
    const stylesheetName = inputFile.split('.');
    const outputFile = `./output/stylesheets/${stylesheetName[0]}.html`;

    sass.render({
      file: `src/stylesheets/${inputFile}`,
      outputStyle: 'compressed'
    }, function (error, result) {
      if (error) {
        console.log(error.status);
        console.log(error.column);
        console.log(error.message);
        console.log(error.line);
      } else {
        let cssOutput = result.css.toString();
        postcss([require('autoprefixer'), require('cssnano')])
          .process(cssOutput)
          .then((result) => {
            fs.writeFile(outputFile, result.css, function (err) {
              if (err) {
                return console.log(err);
              }
              console.log('\u2611 file ' + outputFile + ' updated with current styling from ' + inputFile);
            });
          });
      }
    });
  });
});


