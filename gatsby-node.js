const path = require('path');
const { cssModulesConfig } = require("gatsby-1-config-css-modules");

const LOCAL_IDENT_NAME = '[folder]__[local]--[hash:base64:5]';
const replaceLoaderIdentName = (loader, newIdent) => {
  const defaultConfig = cssModulesConfig("develop");
  // Split loader string out into parts
  const parts = defaultConfig.split("&");

  // Find ident
  const identIndex = parts.findIndex((el) => el.startsWith("localIdentName"));
  const ident = parts[identIndex];
  const identParts = ident.split("=");

  // Replace existing ident with new
  const replacedIdent = [identParts[0], "=", newIdent].join("");

  // Join parts back into a string
  const newConfig = parts.map(
    (el, i) => i === identIndex ? replacedIdent : el
  );

  return newConfig.join("&");
};


exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    config.loader(`cssModules`, (current) => {
      const index = current.loaders.findIndex((loader) =>
        loader.startsWith("css?")
      );

      const newLoader = replaceLoaderIdentName(
        current.loaders[index],
        LOCAL_IDENT_NAME
      );

      current.loaders[index] = newLoader;
      return current;
    });

    config.loader(`sassModules`, (current) => {
      const index = current.loaders.findIndex((loader) =>
        loader.startsWith("css?")
      );

      const newLoader = replaceLoaderIdentName(
        current.loaders[index],
        LOCAL_IDENT_NAME
      );

      current.loaders[index] = newLoader;
      return current;
    });
  }

  config.merge({
    resolve: {
      alias: {
        Components: path.resolve(config._config.context, 'src', 'components'),
        Elements: path.resolve(config._config.context, 'src', 'elements'),
        Images: path.resolve(config._config.context, 'src', 'assets', 'images'),
        Styles: path.resolve(config._config.context, 'src', 'assets', 'styles')
      }
    }
  });

  return config;
};

exports.createPages = ({ boundActionCreators: { createPage }, graphql}) => {
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
      const processedCourses = new Set();
      return result.data.allTagsJson.edges.forEach((edge) => edge.node.courses.map((course) => {
        if (! processedCourses.has(course.url)) {
          processedCourses.add(course.url);
          return createPage({
            path: `courses/${edge.node.url}/${course.url}`,
            component: courseComponent,
            context: {
              courseUrl: course.url
            }
          });
        }
      }));
    });
}
