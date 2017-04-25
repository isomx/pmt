import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, IndexRoute } from 'react-router-dom';
import { Route, Link, NavLink } from 'react-router-dom';
// import { ConnectedRouter, push } from 'react-router-redux';
import { ConnectedRouter } from 'react-router-redux';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons';
import WebsitesPage from './WebsitesPage';
import DashboardPage from './DashboardPage';
import { history } from '../store';
import Greeting from '../components/Greeting';

//styles
// import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runCount: 0,
    };
    this.getNavItems = this.getNavItems.bind(this);
    /**
    this.navItems = [
      {
        active: false,
        component: this.getNavItems,
        contentClassName: 'md-grid',
      },
    ];
    **/
    this.navButton = (
      <Button iconClassName="info" flat={true} label="Welcome" />
    );
    // leftIcon={<FontIcon>info</FontIcon>}
    this.navItems = [
      {
        key: 'dashboard',
        divider: false,
        subheader: false,
        component: Link,
        to: '/dashboard',
        primaryText: 'Dashboard',
        leftIcon: <FontIcon>dashboard</FontIcon>,
      },
      {
        key: 'dashboardDivider',
        divider: true,
      },
      {
        key: 'websites',
        component: Link,
        to: '/websites',
        divider: false,
        subheader: false,
        primaryText: 'Websites',
        leftIcon: <FontIcon>important_devices</FontIcon>,
        nestedItems: [{
          // key: 'websitesManage',
          divider: false,
          subheader: false,
          component: Link,
          to: '/websites/manage',
          primaryText: 'Manage',
        }, {
          // key: 'websitesReports',
          divider: false,
          subheader: false,
          component: Link,
          to: '/websites/manage',
          primaryText: 'Reports',
        }],
      },
      {
        key: 'funnels',
        divider: false,
        subheader: false,
        primaryText: 'Funnels',
        leftIcon: <FontIcon>network_wifi</FontIcon>,
        component: Link,
        to: '/funnels',
      },
      {
        key: 'contacts',
        primaryText: 'Contacts',
        leftIcon: <FontIcon>people</FontIcon>,
        divider: false,
        subheader: false,
        nestedItems: [{
          // key: 'contactsLists',
          component: Link,
          divider: false,
          subheader: false,
          to: '/contacts/lists',
          primaryText: 'Lists',
        }, {
          // key: 'contactsCampaigns',
          divider: false,
          subheader: false,
          component: Link,
          to: '/contacts/campaigns',
          primaryText: 'Campaigns',
        }, {
          // key: 'contactsTemplates',
          divider: false,
          subheader: false,
          component: Link,
          to: '/contacts/templates',
          primaryText: 'Templates'
        }],
      },
      {
        key: 'trainingDivider',
        divider: true,
      },
      /**
      {
        key: 'trainingHeader',
        subheader: true,
        primaryText: 'Training',
        leftIcon: <FontIcon>library_books</FontIcon>
      },
       **/
      {
        key: 'training',
        divider: false,
        subheader: false,
        primaryText: 'Training',
        leftIcon: <FontIcon>library_books</FontIcon>,
        component: Link,
        to: '/training'
      },
      {
        key: 'accountDivider',
        divider: true,
      },
      {
        key: 'accountHeader',
        subheader: true,
        primaryText: 'Account',
      },
      {
        key: 'training23',
        divider: false,
        subheader: false,
        primaryText: 'Training',
        leftIcon: <FontIcon>library_books</FontIcon>,
        component: Link,
        to: '/training'
      },
    ];
  }

  getNavItems(something) {
    console.log('navItems something = ', something);
    return (
      <List style={{ textAlign: 'left' }}>
        <Link to="/welcome">
          <ListItem primaryText="Welcome" leftIcon={<FontIcon>info</FontIcon>} style={{ textAlign: 'left' }} />
        </Link>
      </List>
    );

    /**
     return (
     <Link to="/welcome" style={{ textAlign: 'center' }}>
     <Button>
     <FontIcon>info</FontIcon>
     </Button>
     </Link>
     );
     **/
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <NavigationDrawer
          drawerTitle="Navigation"
          toolbarTitle="Predictive Marketing"
          // tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          // desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
          // desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          // desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          navItems={this.navItems}
        >

          <Route exact={true} path="/" component={Greeting} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/websites" component={WebsitesPage} />
        </NavigationDrawer>
      </ConnectedRouter>
    );
  }
}


function mapStateToProps(store, ownProps) {
  return {};

}

function mapDispatchToProps(dispatch, state) {
  return {};

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
