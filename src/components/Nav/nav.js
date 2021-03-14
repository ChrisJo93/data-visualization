export default function Nav() {
  const displayComponent = () => {
    console.log(`I'll be the call back function to display a different graph`);
  };
  return (
    <div className="navBanner navLink">
      <button onClick={displayComponent}>Line Graph</button>
      <button>Bar Graph</button>
      <button>Cartesian Graph</button>
    </div>
  );
}
