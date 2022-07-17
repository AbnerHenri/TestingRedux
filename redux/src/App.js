import './App.css';

import Principal from './Components/Principal/PrincipalCount'
import Secondary from './Components/Secondary/SecondaryCount'

function App() {
  return (
    <div className="App">
      <Principal />

      <div>
        <Secondary />
        <Secondary />
        <Secondary />
        <Secondary />
        <Secondary />
      </div>
    </div>
  );
}

export default App;
