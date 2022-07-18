import './App.css';

import Principal from './Components/Principal/PrincipalCount'
import Secondary from './Components/Secondary/SecondaryCount'

function App() {
  return (
    <div className="App">
      <Principal />

      <div>
        <Secondary value={1} />
        <Secondary value={2} />
        <Secondary value={3} />
        <Secondary value={4} />
        <Secondary value={5} />
      </div>
    </div>
  );
}

export default App;
