import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  border: 1px solid blue;
  font: inherit;
  padding: 5px; 
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color:black
`;


class App extends Component {
  state = {
    persons: [
      {id: 'ad', name: 'Shyryn', age: 22 },
      {id: 'as', name:'Sholpan', age: 26},
      {id: 'af', name:'Olzhas', age: 25},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    //console.log ('Switch')
    this.setState({
      persons: [
        {name:newName, age: 22 },
        {name:'Sholpan', age: 26},
        {name:'Olzhas', age: 25},
      ]
    })
  }

  nameChangeHandler = (event, id  )=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: [
        {name: 'Shyryn', age: 22},
        {name: event.target.value, age: 26}, 
        {name: 'Olzhas', age: 25}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
    console.log('changed')
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons] /// good practice, spread operator
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue', 
      font: 'inherit', 
      padding: '5px', 
      cursor: 'pointer', 
      ':hover': {
        backgroundColor: 'lightgreen', 
        color:'black'
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed ={(event) => this.nameChangeHandler(event, person.id)}/>
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: "salmon", 
        color: 'black'
      }
    }

    let classes = [];

    if(this.state.persons.length<= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1>Hi! I'm react App!</h1>
        <p className = {classes.join(' ')}>This is really working!</p>
        <button className = 'button' onClick = {this.togglePersonsHandler}>Show!</button>
        {persons}
      </div>

    );
  }
}

//export default Radium(App); in case with radium

export default App; 