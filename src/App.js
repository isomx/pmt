import React, {Component} from 'react';
import logo from './logo.svg';

//styles
import './App.less';
import './App.scss';
import './App.styl';
import styles from './Modules.css';

class App extends Component {
  static render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2 className="App-title"> ☢ custom-react-scripts ☢ </h2>
          <div className="App-subtitle"> Allow custom config for create-react-app without ejecting</div>
        </div>
        <div className={styles.description}>
          Updated to use static render() method
        </div>
      </div>
    )
  }
}

export default App;
