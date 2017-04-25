export default {
  path: 'dashboard',
  indexRoute: {
    getComponent(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, { component: require('containers/DashboardPage').default });
        });
      } else {
        cb(null, { component: require('containers/DashboardPage').default });
      }
    },
  },
}