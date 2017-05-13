/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import { routeTransition } from '../actions/mdTransition';
// import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import Toolbar from '../components/Toolbar';

const imgSrc = 'http://freedomlifestylenetwork.com/app/img/screenshots/s_74_0.jpg';
class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0,
    };
  }
  // <Toolbar title={this.props.location.pathname} />
  render() {
    return(
      <div key={this.props.location.key}>

      <section key={location.key} className="md-grid md-grid--40-24 example md-toolbar--relative" style={{background: '#fafafa'}}>
        <div key={location.key} className="md-cell md-cell--2">
          <Card style={{ height: '100%' }} className="md-block-centered" raise={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
              <MediaOverlay>
                <CardTitle title="mysiteasdfwejlk34.com">
                  <Button className="md-cell--right" icon>star_outline</Button>
                </CardTitle>
              </MediaOverlay>
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
            <CardActions expander>
              <Button flat label="Funnels Page" onClick={(e) => { this.props.routeTransition(e, '/funnels?something=241'); }} />
              <Button flat label="Action 2" />
            </CardActions>
            <CardText expandable>
              <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, autem blanditiis cum
                  expedita id iste labore laboriosam minima neque, nisi, sed soluta vel? Amet fugiat officiis quasi
                  soluta vel?
                </div>
                <div>Aliquam animi dolores eius est eum excepturi incidunt laudantium magnam maxime minus modi nobis
                  numquam odit, quod reprehenderit similique, sint. Cupiditate excepturi explicabo, fuga labore
                  mollitia nesciunt sit. Asperiores, eius?
                </div>
                <div>Aliquid amet consectetur consequuntur culpa cupiditate dignissimos dolore, eos ex explicabo
                  ipsa ipsam itaque maiores modi nihil omnis porro quae quod repudiandae sit vel! Harum minus nobis
                  quasi quod sapiente?
                </div>
                <div>Ab amet, aperiam, aspernatur atque consectetur consequatur cumque, earum esse eum fugit harum
                  ipsa ipsam iste laboriosam nulla odit perferendis possimus praesentium quaerat repellat rerum sed
                  similique sunt totam vitae?
                </div>
                <div>Aliquid, asperiores deserunt itaque officia ut voluptas? Accusantium ad alias aliquid, beatae
                  cumque debitis doloribus ea ipsam itaque nam natus pariatur possimus quas, quis sequi sunt tempore
                  veniam voluptatem voluptatum?
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="md-cell md-cell--2">
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
              <Button flat label="Action 2" />
            </CardActions>
          </Card>
        </div>
        <div className="md-cell md-cell--2">
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
        <div className="md-cell md-cell--6">
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




        <div key={location.key} className="md-cell md-cell--4">
          <Card style={{ height: '100%' }} className="md-block-centered" raise={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
              <MediaOverlay>
                <CardTitle title="mysiteasdfwejlk34.com">
                  <Button className="md-cell--right" icon>star_outline</Button>
                </CardTitle>
              </MediaOverlay>
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
            <CardActions expander>
              <Button flat label="Action 1" />
              <Button flat label="Action 2" />
            </CardActions>
            <CardText expandable>
              <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, autem blanditiis cum
                  expedita id iste labore laboriosam minima neque, nisi, sed soluta vel? Amet fugiat officiis quasi
                  soluta vel?
                </div>
                <div>Aliquam animi dolores eius est eum excepturi incidunt laudantium magnam maxime minus modi nobis
                  numquam odit, quod reprehenderit similique, sint. Cupiditate excepturi explicabo, fuga labore
                  mollitia nesciunt sit. Asperiores, eius?
                </div>
                <div>Aliquid amet consectetur consequuntur culpa cupiditate dignissimos dolore, eos ex explicabo
                  ipsa ipsam itaque maiores modi nihil omnis porro quae quod repudiandae sit vel! Harum minus nobis
                  quasi quod sapiente?
                </div>
                <div>Ab amet, aperiam, aspernatur atque consectetur consequatur cumque, earum esse eum fugit harum
                  ipsa ipsam iste laboriosam nulla odit perferendis possimus praesentium quaerat repellat rerum sed
                  similique sunt totam vitae?
                </div>
                <div>Aliquid, asperiores deserunt itaque officia ut voluptas? Accusantium ad alias aliquid, beatae
                  cumque debitis doloribus ea ipsam itaque nam natus pariatur possimus quas, quis sequi sunt tempore
                  veniam voluptatem voluptatum?
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="md-cell md-cell--4">
          <Card style={{height: '100%' }} raise={true}>
            <Media>
              <img src={imgSrc} role="presentation" />
            </Media>
            <CardTitle
              title="Card Title"
              subtitle="Card Subtitle"
            />
            <CardActions>
              <Button flat label="Action 1" />
              <Button flat label="Action 2" />
            </CardActions>
          </Card>
        </div>
        <div className="md-cell md-cell--2">
          <Card style={{height: '100%' }} raise={true}>
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
            <CardText>
              <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, autem blanditiis cum
                  expedita id iste labore laboriosam minima neque, nisi, sed soluta vel? Amet fugiat officiis quasi
                  soluta vel?
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="md-cell md-cell--2">
          <Card style={{ height: '100%' }} raise={true} tableCard={true}>
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
      </div>
    );
  }
}


function mapStateToProps(store, ownProps) {
  return {};

}

function mapDispatchToProps(dispatch, state) {
  return {
    routeTransition: (e, locOrUrl) => dispatch(routeTransition(e, locOrUrl)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
