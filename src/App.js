import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "Nick", age: 31 },
      { name: "Anna", age: 22 },
      { name: "Zoozoo", age: 2 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    // this.state.persons[0].name = 'Mykola';    Don't do this+
    this.setState({
      persons: [
        { name: "Mykola", age: 31 },
        { name: "Anna", age: 22 },
        { name: "Zoozoo", age: 2.5 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies : sleeping and playing
        </Person>
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1', null,'I\'m a React app'));
  }
}

export default App;
