import { connect } from 'react-redux';
import { Component } from 'react';
import mapStoreToProps from '../../Redux/mapStoreToProps';

import './App.css';
import Graph from '../Graph/graph';
import Nav from '../Nav/nav';

class App extends Component {
  state = {
    peopleList: [],
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PEOPLE',
    });
    this.setState({
      peopleList: this.props.store.graphR,
    });
  }

  render() {
    return (
      <div>
        <header className="navBar">
          <Nav />
        </header>
        <div className="box">
          <Graph peopleList={this.state.peopleList} />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
