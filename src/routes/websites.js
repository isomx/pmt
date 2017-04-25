export default {
  path: 'websites',
  indexRoute: {
    getComponent(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, { component: require('containers/WebsitesPage').default });
        });
      } else {
        cb(null, { component: require('containers/WebsitesPage').default });
      }
    },
  },
  childRoutes: [{
    path: 'manage',
    getComponent(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, { component: require('containers/websites/Manage').default });
        });
      } else {
        cb(null, { component: require('containers/websites/Manage').default });
      }
    },
  },{
    path: 'reports',
    getComponent(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, { component: require('containers/websites/Reports').default });
        });
      } else {
        cb(null, { component: require('containers/websites/Reports').default });
      }
    },
  }]
};