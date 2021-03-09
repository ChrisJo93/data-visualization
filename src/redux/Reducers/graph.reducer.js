const graph = (state = [], action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
      return console.log('I made it coach, reducer');
    default:
      return state;
  }
};

export default graph;
