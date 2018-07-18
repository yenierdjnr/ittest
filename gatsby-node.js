const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {

  const config = getConfig();
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(config.context, 'src', 'components'),
        Elements: path.resolve(config.context, 'src', 'elements'),
        Images: path.resolve(config.context, 'src', 'assets', 'images'),
        Styles: path.resolve(config.context, 'src', 'assets', 'styles')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.js$|\.jsx$/,
          exclude: /(node_modules|cache|public)/,
          use: [
            {
              loader: 'eslint-loader'
            }
          ]
        }
      ]
    }
  });

};

exports.createPages = ({ actions: { createPage }, graphql}) => {
  const categoryComponent = path.resolve('src/components/CourseCategory/index.js');
  const courseComponent = path.resolve('src/components/Course/index.js');

  return graphql(
    `
      {
        allTagCategoriesJson {
          edges {
            node {
              tags {
                url
              }
            }
          }
        }
      }
      `
  ).then((result) => {
    const processedTags = new Set();
    return result.data.allTagCategoriesJson.edges.forEach((edge) => edge.node.tags.map((tag) => {
      if (! processedTags.has(tag.url)) {
        processedTags.add(tag.url);
        return createPage({
          path: `courses/${tag.url}`,
          component: categoryComponent,
          context: {
            url: tag.url
          }
        })
      }
    }))
  })
    .then(() => graphql(
      `
      {
        allTagsJson {
          edges {
            node {
              url
              courses {
                url
              }
            }
          }
      	}
      }
      `)).then((result) => {
      // const processedCourses = new Set();
      return result.data.allTagsJson.edges.forEach((edge) => edge.node.courses.map((course) => {
        // if (! processedCourses.has(course.url)) {
          // processedCourses.add(course.url);
          return createPage({
            path: `courses/${edge.node.url}/${course.url}`,
            component: courseComponent,
            context: {
              courseUrl: course.url
            }
          });
        // }
      }));
    });
}
