import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../Redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  return <div>chart time baby</div>;
}

export default connect(mapStoreToProps)(Graph);
