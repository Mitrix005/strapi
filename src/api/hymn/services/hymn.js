'use strict';

/**
 * hymn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hymn.hymn');
