import React, { Component } from 'react';
import { connect } from 'react-redux';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0,
    };
  }

  render() {
    return(
      <h3>Websites - Manage</h3>
    );
  }
}


function mapStateToProps(store, ownProps) {

}

function mapDispatchToProps(dispatch, state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Manage)
