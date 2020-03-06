import React, { useState } from "react";
import "./App.css";
import Person from "./Person/person.js";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Moritz", age: 24 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Was clicked");
    // DON'T DO THIS: personsState.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: Math.round(Math.random() * 30) },
        { name: "Moritz", age: 24 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
