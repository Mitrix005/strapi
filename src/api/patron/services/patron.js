'use strict';

/**
 * patron service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patron.patron');
