import { connect } from 'react-redux';
import { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './App.css';
import Graph from '../Graph/graph';
import Nav from '../Nav/nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PEOPLE',
    });
  }

  render() {
    return (
      <div>
        <header className="navBar">
          <Nav />
        </header>
        <div className="box">
          <Graph />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
