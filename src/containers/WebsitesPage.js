import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Manage from './websites/Manage';
import Reports from './websites/Reports';


class WebsitesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0,
    };
  }

  render() {
    console.log('rendering WebsitesPage');
    return(
      <div className="md-grid md-cell md-cell--middle">
        <h1>Websites Page</h1>
      </div>
    );
  }
}

/**
function mapStateToProps(store, ownProps) {
  return {};

}

function mapDispatchToProps(dispatch, state) {
  return {};

}
**/
export default connect()(WebsitesPage)
