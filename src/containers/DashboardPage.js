import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0,
    };
  }

  render() {
    return(
      <h1>Dashboard Page</h1>
    );
  }
}


function mapStateToProps(store, ownProps) {
  return {};

}

function mapDispatchToProps(dispatch, state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
