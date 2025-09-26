'use strict';

/**
 * kadra-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kadra-new.kadra-new');
