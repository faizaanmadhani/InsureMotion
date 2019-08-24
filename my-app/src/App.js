import React from 'react';
import logo from './car-insurance.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find out how much you can reduce your insurace premiums by.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Determine Index
        </a>
        <button onclick="console.log(detRates(4, 6))">
Button</button>

      </header>
    </div>
  );
}

function detRates(roadRage, distraction) extends React.Component {
  if (roadRage > 0.8 && distraction > 0.8) {
    return "Your Insurance Rates will likely see no decrease in value"
  } else if (roadRage > 0.6 && distraction > 0.6) {
    return "Your Insurance Rates will likely see little decrease in value (Expect a 0-1% decrease)"
  } else if (roadRage > 0.6 || distraction > 0.6) {
    return "Your Insurance Rates will likely see little decrease in value (Expect a 1-2% decrease)"
  } else if (roadRage < 0.3 && distraction < 0.3) {
    return "Your Insurance Rates will likely see a great decrease in value (Expect a 5-7% decrease or more)"
  } else {
    return "Your Insurance Rates will likely see a moderate decrease in value (Expect a 4-5% decrease)"
  }

}


export default App;
