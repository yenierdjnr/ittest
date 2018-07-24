const fs = require('fs');
const path = require('path');

const DIRECTORY = path.join('data', 'courses');
fs.readdir(DIRECTORY, (err, files) => {
  if (err) { throw err; }
  files.forEach((file) => {
    fs.readFile(path.join(DIRECTORY, file), (err, data) => {
      if (err) { throw err; }
      const course = JSON.parse(data);
      console.log(`rewrite ^/course-library/${course.url}/?$ /courses/${course.tagUrl}/${course.url} redirect;`);
    });
  });
});
