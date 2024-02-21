'use strict';

/**
 * blob service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blob.blob');
