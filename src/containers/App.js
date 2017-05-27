/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, matchPath } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MdTransitionGroup, { MdTransitionHandler } from './MdTransitionGroup';
import WebsitesPage from './WebsitesPage';
import DashboardPage from './DashboardPage';
import FunnelsPage from './FunnelsPage';
import getNavItems from '../constants/navItems';
import Toolbar from '../components/Toolbar';
import ToolbarMenu from '../components/ToolbarMenu';
import _ from 'lodash';
import forOwn from 'lodash/forOwn';
import { routeTransition } from '../actions/mdTransition';
//styles
// import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.runCount = 0;
    this.transitionManager = this.transitionManager.bind(this);
    this.lifecycleManager = this.lifecycleManager.bind(this);
    this.anchorData = {};
    this.transitioning = false;
  }

  shouldComponentUpdate() {
    console.log('App should update? ');
    return true;
  }

  transitionManager(action) {
    let { keysToEnter, keysToLeave, getStore, childRefs, childContainers, performEnter, performLeave } = action.payload;

    switch(action.type) {
      case 'componentWillMount':
        this.transitionId = action.payload.id;
        // console.log('this.transitionId = ', this.transitionId);
        break;
      case 'componentDidMount':

        break;
      case 'componentWillReceiveProps':
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log('scrollTop = ', scrollTop);
        console.log('keysToLeave = ', keysToLeave);
        console.log('keysToEnter = ', keysToEnter);
        const store = action.payload.getStore();
        let locationState = this.props.locationState;
        console.log('locationState = ', locationState);
        if (locationState) {
          const anchorId = locationState.parentIds[0];
          console.log('anchorId = ', anchorId);
          if (store[anchorId] && store[anchorId].type === 'anchor') {
            const anchorRect = store[anchorId].callback({type: 'getLocation'});
            this.anchorData.rect = {
              top: anchorRect.top - scrollTop,
              right: anchorRect.right,
              bottom: anchorRect.bottom - scrollTop,
              left: anchorRect.left,
              width: anchorRect.width,
              height: anchorRect.height,
            };
            this.anchorData.children = store[anchorId].callback({type: 'getChildren'});
            console.log('anchorData = ', this.anchorData);


          }
        }
        break;
      case 'componentWillUpdate':
        console.log('componentWillUpdate = ', action.payload);
        break;
      case 'componentDidUpdate':


        break;
      case 'dispatchToParentGroup':
        console.log('transitionManager dispatchToParentGroup = ', action);
        //let { getStore } = action.payload;
        // console.log('store = ', action.payload.getStore());
        const { parentIds, commonElements } = action.payload;
        switch(action.receivedAction.type) {
          case 'toDashboard':
            let commonElementId = null;
            forOwn(action.payload.commonElements, (value, key) => {
              console.log('value, key = ', value, key);
              if (value.type === 'commonElement' && value.name === action.receivedAction.payload.commonElement) {
                commonElementId = value.id;
              }
            })
            const dispatchAction = {
              type: 'MD_TRANSITION_ROUTE',
              payload: {
                url: '/dashboard',
                groupId: this.transitionId,
                anchorId: parentIds[0],
                commonElementId,
                transitionType: 'anchorCommonElement',
              }
            }
            console.log("dispatchAction = ", dispatchAction);
            this.props.dispatch(dispatchAction);
            // this.props.routeTransition(dispatchAction);
            break;
        }

    }

  }

  lifecycleManager(action) {
    switch(action.type) {
      case 'componentWillMount':
        if (this.transitioning) {
          return {
            transitioning: true,
            anchorData: this.anchorData,
          }
        } else {
          return {
            transitioning: false,
          }
        }
        this.transitioning = false;

        break;
      case 'componentDidMount':
        break;
      case 'componentWillAppear':
        break;
      case 'componentDidAppear':
        break;
      case 'componentWillEnter':
        break;
      case 'componentDidEnter':
        break;
      case 'componentWillLeave':
        break;
      case 'componentDidLeave':
        break;
    }

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
  componentDidUpdate() {

  }
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
    console.log('app rendering');
    const match1 = matchPath('/dashboard', {
      path: '/:id',
      exact: true,
      strict: false,
    });
    const match2 = matchPath('/dashboard', {
      path: '/dashboard',
      exact: true,
      strict: false,
    });
    // console.log('match1 = ', match1);
    // console.log('match2 = ', match2);
    const location = this.props.location;
    const transitionKey = location.pathname.split('/')[1];
    return (
    <div>
      <Toolbar title={location.pathname} />
      <MdTransitionGroup transitionManager={this.transitionManager} childRefId={location.pathname} name='root'>
        <MdTransitionHandler key={transitionKey} lifecycleManager={this.lifecycleManager} name={transitionKey}>
          <Route key={location.key + 'dashboard'} path="/dashboard" render={ props => <DashboardPage {...props} />} />
          <Route key={location.key + 'websites'} path="/websites" render={ props => <WebsitesPage {...props} /> } />
          <Route key={location.key + 'funnels'} path="/funnels" render={ props => <FunnelsPage {...props} /> } />
        </MdTransitionHandler>
      </MdTransitionGroup>
    </div>
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
  console.log('ownProps = ', ownProps);
  return {
    locationState: ownProps.location.state ? ownProps.location.state.mdTransition : null,

  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    routeTransition: (locOrPath, state) => dispatch(routeTransition(locOrPath, state)),
    dispatch,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
