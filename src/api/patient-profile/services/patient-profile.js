'use strict';

/**
 * patient-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-profile.patient-profile');
