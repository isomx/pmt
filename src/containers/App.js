/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MdTransitionGroup from './MdTransitionGroup';
import WebsitesPage from './WebsitesPage';
import DashboardPage from './DashboardPage';
import FunnelsPage from './FunnelsPage';
import getNavItems from '../constants/navItems';
import Toolbar from '../components/Toolbar';
import ToolbarMenu from '../components/ToolbarMenu';
import _ from 'lodash';

//styles
// import './styles.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.runCount = 0;
  }
  /**
  shouldComponentUpdate(nextProps, nextState) {
    console.log('this.props = ', this.props);
    const prevLocation = _.split(this.props.location.pathname, '/')[1];
    const newLocation = _.split(nextProps.location.pathname, '/')[1];
    if (prevLocation === newLocation) {
      return false;
    }
    return true;
  }
   **/
  componentWillMount() {
    // console.log('App WILL mount');
  }

  componentDidMount() {
    // console.log('App DID mount');
  }

  componentWillUpdate() {
    // window.scrollTo(0,0);
  }
// <MdTransitionGroup location={this.props.location} doTransition={true}>
  render() {
    // console.log('app rendering');
    /**
    return (
      <Switch>
        <Route path="/dashboard" childRefId="dashboardPage" render={ (props) => {
          return(
            <MdTransitionGroup transitionMode="out-in" childRefId={props.location.pathname}>
              <DashboardPage key={props.location.key} {...props} />
            </MdTransitionGroup>
          );
        }} />

        <Route path="/websites" childRefId="websitesPage" render={ (props) => {
          return(
            <MdTransitionGroup transitionMode="out-in" childRefId={props.location.pathname}>
              <WebsitesPage key={props.location.key} {...props} />
            </MdTransitionGroup>
          );
        }} />

        <Route path="/funnels" childRefId="funnelsPage" render={ (props) => {
          return(
            <MdTransitionGroup transitionMode="out-in" childRefId={props.location.pathname}>
              <FunnelsPage key={props.location.key} {...props} />
            </MdTransitionGroup>
          );
        }} />
      </Switch>
    );
**/
    return (
      <Route render={ (props) => {
        return(
          <div>
            <Toolbar title={props.location.pathname} />
            <MdTransitionGroup transitionMode="in-out" childRefId={props.location.pathname} name="root">
              <div key={props.location.key + 'content'}>
                <Route key={props.location.key + 'dashboard'} path="/dashboard" render={ props => <DashboardPage {...props} />} />
                <Route key={props.location.key + 'websites'} path="/websites" render={ props => <WebsitesPage {...props} /> } />
                <Route key={props.location.key + 'funnels'} path="/funnels" render={ props => <FunnelsPage {...props} /> } />
              </div>
            </MdTransitionGroup>
          </div>
        );
      }} />
    );
    return (
      <Route render={ (props) => {
        return(
          <div>
            <Toolbar title={props.location.pathname} />

          <MdTransitionGroup transitionMode="in-out" childRefId={props.location.pathname}>
            <Switch key={props.location.key}>
              <Route path="/dashboard" render={ props => <DashboardPage {...props} />} />
              <Route path="/websites" render={ props => <WebsitesPage {...props} /> } />
              <Route path="/funnels" render={ props => <FunnelsPage {...props} /> } />
            </Switch>
          </MdTransitionGroup>
          </div>
        );
      }} />
    );

    return (
      <MdTransitionGroup transitionMode="out-in">
        <DashboardPage path="/dashboard" componentId="dashboardPage"  />
        <WebsitesPage path="/websites" componentId="websitesPage" />
        <FunnelsPage path="/funnels" componentId="funnelsPage" />
      </MdTransitionGroup>
    );

    /**
    return (
      <Toolbar title="Home Page" />
    );
     **/

    return (
      <Route render={(props) => {
        console.log('props = ', props);
        return(
          <MdTransitionGroup {...props} id="root">
            <Route path="/dashboard" render={ props => <DashboardPage {...props} /> } />
            <Route path="/websites" render={ props => <WebsitesPage {...props} /> } />
            <Route path="/funnels" render={ props => <FunnelsPage {...props} /> } />
          </MdTransitionGroup>
        );
      }} />
    );

    return (
      <Route render={(props) => {
        const currNav = getNavItems(location.pathname);
        // console.log('app rendering');
        let locationKey = _.split(location.pathname, '/')[1];
        return(
          <NavigationDrawer
            drawerTitle="Navigation"
            toolbarTitle={currNav.pageTitle}
            // tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            // desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
            // desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            // navItems={navItems.map((props, i) => <ListItem {...props} key={i} />)}
            // navItems={getNavItems(location.pathname)}
            navItems={currNav.navItems}
            toolbarActions={<ToolbarMenu key="menu2" id="woop-menu"/>}
            // renderNode={this.runCount === 1 ? document.getElementById('aside1') : document.getElementById('aside2')}
            renderNode={document.getElementById('aside1')}
            lastChild={true}
            // transitionEnterTimeout={null}
            // transitionLeaveTimeout={null}
            // transitionName={null}
          >

            <Switch key={locationKey}>

              <Route path="/funnels" render={(props) => {
                console.log('funnels rendering')
                return (
                  <MdTransitionGroup key={locationKey} location={location}>
                    <FunnelsPage />
                  </MdTransitionGroup>
                );

              }}/>
              <Route path="/websites" render={(props) => {
                console.log('websites rendering')
                return (<WebsitesPage />);
              }}/>
              <Route path="/dashboard" render={(props) => {
                console.log('dashboard rendering')
                return (<DashboardPage />);
              }}/>

            </Switch>
          </NavigationDrawer>
        );
      }}/>




    );
    /**
    return (
      <MdTransitionGroup>
        <Route
          render={({ location }) => (
            <div>
              <div style={{ position: 'absolute' }}>
                <NavigationDrawer
                  drawerTitle="Navigation"
                  toolbarTitle={currNav.pageTitle}
                  // tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
                  // desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
                  // desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
                  desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                  // navItems={navItems.map((props, i) => <ListItem {...props} key={i} />)}
                  // navItems={getNavItems(location.pathname)}
                  navItems={currNav.navItems}
                  toolbarActions={<ToolbarMenu key="menu2" id="woop-menu"/>}
                  renderNode={this.runCount === 1 ? document.getElementById('aside1') : document.getElementById('aside2')}
                  lastChild={false}
                  // transitionEnterTimeout={null}
                  // transitionLeaveTimeout={null}
                  // transitionName={null}
                >
                  <Switch key={locationKey}>
                    <Route path="/funnels" render={props => <FunnelsPage />} />
                    <Route path="/websites" render={props => <WebsitesPage />} />
                    <Route path="/dashboard" render={props => <DashboardPage />} />
                  </Switch>
                </NavigationDrawer>
              </div>
            </div>
          )}
        />
      </MdTransitionGroup>
    );
     **/
  }
}


function mapStateToProps(store, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, state) {
  return {};
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
