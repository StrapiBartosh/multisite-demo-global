'use strict';

/**
 * global-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-about.global-about');
