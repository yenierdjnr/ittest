const fs = require('fs');
const path = require('path');

const DIRECTORY = path.join('data', 'courses');
fs.readdir(DIRECTORY, (err, files) => {
  if (err) { throw err; }
  files.forEach((file) => {
    fs.readFile(path.join(DIRECTORY, file), (err, data) => {
      if (err) { throw err; }
      const course = JSON.parse(data);
      course.topics.forEach((topic) => {
        topic.episodes.forEach((episode) => {
          console.log(`rewrite ^/course-library/${course.url}/${episode.url}/?$ /courses/${course.tagUrl}/${course.url} redirect;`);
        });
      });
    });
  });
});
