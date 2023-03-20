'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('multi-site-selector')
      .service('myService')
      .getWelcomeMessage();
  },
});
