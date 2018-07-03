import 'babel-polyfill';

exports.onClientEntry = () => {
  // Having an empty onClientEntry fixes an IE11 issue according to
  // https://github.com/gatsbyjs/gatsby/issues/2177#issuecomment-382280801
};
