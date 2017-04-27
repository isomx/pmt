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
      <section className="md-grid md-grid--40-16" key="new23">
        <section className="md-cell md-cell--12">
          <h1>Dashboard Page</h1>
          <div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor dolore eius harum illum inventore
              nihil quo unde ut. Alias commodi corporis cumque doloribus incidunt ipsam ipsum minus provident qui.
            </div>
            <div>Deserunt dolor ipsum ratione repudiandae rerum sapiente. Dicta ex inventore officiis tempora.
              Cupiditate eius fuga nobis nulla sapiente. Aspernatur atque consequatur distinctio eveniet hic illo maxime
              natus nemo, non sint.
            </div>
            <div>A, architecto asperiores assumenda beatae consequatur cupiditate delectus dolor doloribus
              exercitationem expedita explicabo facere incidunt ipsum itaque maiores natus nostrum officiis quasi,
              quisquam saepe sapiente sed similique vero voluptates voluptatum.
            </div>
            <div>Animi aperiam debitis delectus, dolor enim id illo maxime molestias placeat quasi quisquam reiciendis
              sed voluptate. Animi aut autem ea id, impedit natus, nemo nobis odit rem tempore vel, veritatis.
            </div>
            <div>Alias assumenda dicta, dolore doloribus eos explicabo ipsam laboriosam magni maxime, natus nesciunt
              nisi omnis praesentium quaerat, rerum ut velit! A amet animi ex, impedit laudantium molestiae quos sed
              voluptatum.
            </div>
          </div>
        </section>
      </section>
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
