import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  console.log(props);
  return <div>chart times</div>;
}

export default connect(mapStoreToProps)(Graph);
