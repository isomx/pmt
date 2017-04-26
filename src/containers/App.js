import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import WebsitesPage from './WebsitesPage';
import DashboardPage from './DashboardPage';
import Greeting from '../components/Greeting';
import getNavItems from '../constants/navItems';

//styles
// import './styles.scss';

class App extends Component {
  render() {
    const currNav = getNavItems(location.pathname);
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="Navigation"
            toolbarTitle={currNav.pageTitle}
            // tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            // desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
            // desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            // desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
            // navItems={navItems.map((props, i) => <ListItem {...props} key={i} />)}
            // navItems={getNavItems(location.pathname)}
            navItems={currNav.navItems}
          >
            <Switch>
              <Route exact={true} path="/" component={Greeting} />
              <Route path="/websites" component={WebsitesPage} />
              <Route path="/dashboard" component={DashboardPage} />
            </Switch>
          </NavigationDrawer>

        )}
      />
    );
  }
}


function mapStateToProps(store, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, state) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
