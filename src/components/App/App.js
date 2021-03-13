import './App.css';
import Graph from '../Graph/graph';
import Nav from '../Nav/nav';

function App() {
  return (
    <header className="navBar">
      <Nav />
      <div className="App box">
        <Graph />
      </div>
    </header>
  );
}

export default App;
