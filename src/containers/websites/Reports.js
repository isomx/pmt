import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0,
    };
  }

  render() {
    return(
      <div>
        <h3>Websites - Reports</h3>
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi, corporis dolor, ducimus ex
            exercitationem illum in magni maiores molestias numquam obcaecati possimus provident qui reprehenderit
            repudiandae rerum sapiente vero.
          </div>
          <div>Cupiditate distinctio error et eum ipsam minus, porro. Ad consequatur consequuntur distinctio esse fuga
            hic incidunt libero magni nam nobis optio, quam repudiandae sequi similique suscipit? Animi velit vitae
            voluptas?
          </div>
          <div>Accusantium dolore enim laboriosam maiores reprehenderit ut vero. Beatae dolorem doloremque ea facilis
            fugit, illo inventore, iste iure nemo nisi numquam obcaecati perspiciatis placeat, quam quia sit tempore
            voluptatibus. Labore.
          </div>
          <div>Aliquam excepturi nihil nostrum voluptates! Aspernatur atque aut, delectus dignissimos dolorum ea eius
            enim error inventore minus nemo nisi numquam odio officiis optio qui repudiandae rerum soluta temporibus ut
            voluptatum.
          </div>
          <div>Accusamus accusantium alias blanditiis consequuntur corporis cum doloribus eligendi esse et impedit iure
            laudantium magnam magni, molestiae natus nihil nostrum odio possimus quo repudiandae sint sit velit vero
            vitae voluptatibus.
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(store, ownProps) {
  return {};

}

function mapDispatchToProps(dispatch, state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
