import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
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
    return(
      <Route
        render={({ location }) => (
          <div className="md-grid md-cell md-cell--middle">
            <Route path="/websites/manage" component={Manage} />
            <Route path="/websites/reports" component={Reports} />
          </div>
        )}
      />
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
export default withRouter(connect()(WebsitesPage))
