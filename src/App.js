import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Todo from './component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="App">
      <Todo></Todo>
      </div>
      
    );
  }
}

export default App;

