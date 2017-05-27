/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
// import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TweenMax, { Power2 } from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';
import { routeTransition } from '../../actions/mdTransition';
import { toRoute } from '../../actions/nav';
import MdTransitionEvent from '../../components/mdTransitions/MdTransitionEvent';


import MdTransitionAnchor from '../../components/mdTransitions/MdTransitionAnchor';
import MdTransitionElement from '../../components/mdTransitions/MdTransitionElement';

import Manage from './Manage';

const imgSrc = 'http://freedomlifestylenetwork.com/app/img/screenshots/s_74_0.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runCount: 0,
    };
    this.registerElem = this.registerElem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.elem = null;
    this.navIn = this.navIn.bind(this);
    this.state = {
      runCount: 1,
    }
  }

  handleClick(e) {
    console.log('e = ', e);
    const rect = e.target.getBoundingClientRect();
    const { left, width, top } = rect;
    // console.log('rect = ', rect);
    const elem = this.elem;
    // TweenMax.fromTo(elem,0.5, {x: left, y: top}, {x: 0, y: 0, width: 1900, height: 2000, ease: Power2.easeIn});
    TweenMax.to(e.target,0.5, {x: -left, height: 3000, width: 1900, ease: Power2.easeIn});

  }

  componentDidMount() {
    //source$.next('hello from Home page');
    //console.log('this.props = ', this.props);
    // this.props.navTransitionIn('/dashboard');

  }

  registerElem(elem) {
    if (elem) {
      this.elem = elem;
    }
  }

  componentWillAppear(callback) {
    console.log('Home - Will Appear');
    //callback();
  }

  componentWillEnter(callback) {
    console.log('Home - Will Enter');
    //callback();
  }

  componentWillLeave(callback) {
    console.log('Home - Will Leave');
    //callback();
  }

  navIn(e, url) {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    // this.props.navTransitionIn(this.props.location, url, {left: rect.left, top: rect.top, width: rect.width, height: rect.height});
    this.props.navTransitionIn(e, url);
  }

  render() {
    console.log('Home rendering');
    const cssTransition = false;
    /**
     <ReactCSSTransitionGroup
     transitionName="example23"
     transitionAppear={true}
     transitionAppearTimeout={500}
     transitionEnterTimeout={500}
     transitionLeaveTimeout={300}
     >
     */
    const location = {
      pathname: '/dashboard',
      state: {fromDashboard: 124}
    };
    // <section style={{ position: 'relative', width: '100%'}} className="md-grid md-grid--40-24 example">
    if (this.state.runCount === 1) {
      setTimeout(() => {
        // this.setState({runCount: 2});
      }, 2000);
    }
    return(
      <section className="md-grid md-grid--40-24" style={{background: '#fafafa'}}>
        <ReactTransitionGroup>
          {this.state.runCount === 5 && <Manage doNav={this.handleClick} />}
        </ReactTransitionGroup>
        <div className="md-cell md-cell--4">
          <MdTransitionAnchor name="card1">
            <Card style={{ height: '100%' }} className="md-block-centered" raise={true}>
              <Media>
                <img src={imgSrc} role="presentation" onClick={(e) => { this.props.routeTransition(e, '/dashboard'); }}/>
                <MediaOverlay>
                    <CardTitle title="mysiteasdfwejlk34.com">
                      <Button className="md-cell--right" icon>star_outline</Button>
                    </CardTitle>
                </MediaOverlay>
              </Media>
              <MdTransitionElement name="card1">
                <CardTitle
                  title="Card Title"
                  subtitle="Card Subtitle"
                />
              </MdTransitionElement>
              <CardActions expander>
                <Button flat label="MANAGE" onClick={(e) => { this.navIn(e, '/funnels/manage') } } />
                <MdTransitionEvent render={(props) =>
                  <Button flat label="Dashboard" onClick={(event) => {
                    // props.routeTransition('/dashboard', 'anchorCommonElement', 'card1');
                    props.dispatchToParentGroup({
                      type: 'toDashboard',
                      payload: {
                        commonElement: 'card1',
                      }
                    });
                  }} />
                } />
              </CardActions>
              <CardText expandable>
              </CardText>
            </Card>
          </MdTransitionAnchor>
        </div>
        <div className="md-cell md-cell--4">
          <Card style={{ height: '100%' }} className="md-block-centered" raise={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
            <CardActions>
              <Button flat label="Action 1" />
              <Button flat label="Action 2" onMouseUp={this.handleClick} />
            </CardActions>
          </Card>
        </div>
        <div className="md-cell md-cell--4">
          <Card style={{ height: '100%' }} className="md-block-centered" raise={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
              <MediaOverlay>
                <CardTitle title="Site 7" subtitle="Site subtitle">
                  <Button className="md-cell--right" icon>star_outline</Button>
                </CardTitle>
              </MediaOverlay>
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
            <CardActions>
              <Button flat label="Action 1" />
              <Button flat label="Action 2" />
            </CardActions>
            <CardText expandable>
              <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, autem blanditiis cum
                  expedita id iste labore laboriosam minima neque, nisi, sed soluta vel? Amet fugiat officiis quasi
                  soluta vel?
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="md-cell md-cell--4">
          <Card style={{ height: '100%' }} className="md-block-centered" raise={true} tableCard={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
              <MediaOverlay>
                <CardTitle title="Site 4" subtitle="Wow!">
                  <Button className="md-cell--right" icon>star_outline</Button>
                </CardTitle>
              </MediaOverlay>
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
          </Card>
        </div>
      </section>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, state) {
  return {
    routeTransition: (e, locOrUrl, eventProps) => dispatch(routeTransition(e, locOrUrl, eventProps)),
    // toRoute: (route) => dispatch(toRoute(route)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
