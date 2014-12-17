Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-ui-dropped-event.git',
  name: 'cfs:dropped-event',
  version: '0.0.10',
  summary: "Add dropped event to Meteor UI Templates"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use(['ui', 'templating'], 'client');
  api.addFiles(['dropped.event.js'], 'client');
});
