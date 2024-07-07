'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('app/styles/components/header.css');
  app.import('app/styles/components/footer.css');
  app.import('app/styles/components/grid-container.css');
  app.import('app/styles/components/grid-item.css');

  return app.toTree();
};
