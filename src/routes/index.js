import App from 'containers/App';

export default {
  path: '/',
  indexRoute: { component: App },
  /**
  getIndexRoute(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, {component: require('containers/Home').default});
      });
    } else {
      cb(null, {component: require('containers/Home').default});
    }
  },
   **/
  getChildRoutes(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, [
          require('./dashboard').default,
          require('./websites').default,
          // require('./contacts').default,
          // require('./training').default,
        ]);
      });
    } else {
      cb(null, [
        require('./dashboard').default,
        require('./websites').default,
        // require('./contacts').default,
        // require('./training').default,
      ]);
    }
  },
};
