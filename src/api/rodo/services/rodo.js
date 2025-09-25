'use strict';

/**
 * rodo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rodo.rodo');
