import React from 'react';
import './App.css';
import data from './data/data.json';
import { ForceGraph } from './components/forceGraph';


function App() {

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);


  return (
    <div className="App">
    <header className="App-header">
      Force Graph Example
    </header>
    <section className="Main">
      <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
    </section>
  </div>
);

}
const Circle =() => (
  <div className="App">
       <section className="Main">
        <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section>

    </div>
);


export default App;
