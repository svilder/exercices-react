// import the react and ReactDOM librairies
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'click on me!';
}

// create react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor:'black', color:'yellow' }}>
        {getButtonText()}
      </button>
    </div>
  );
};
// take react component and show it on he screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
