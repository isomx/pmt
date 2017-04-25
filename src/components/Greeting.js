import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons/Button';
import '../scss/components/_greeting.scss';

const Greeting = () => (
  <Card className="greeting">
    <CardTitle title="Welcome!" />
    <CardText>
      <p>
        To get started, click the <code>Get Started</code> button below!<br /><br />
        <em>For help, click the <code>help</code> button on the menu bar.</em>
      </p>
    </CardText>
    <CardText>
      <Button raised primary label="Get Started" />
    </CardText>
  </Card>
);

export default Greeting;
