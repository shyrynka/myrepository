import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';
//import styled from 'styled-components';

/*const StyledDiv = styled.div`
    width: 60%;
    border: 1px solid #eee; 
    box-shadow: 0px 2px 3px #ccc;
    margin: 16px auto; 
    padding: 15px; 
    text-align: center;

    @media(min-width: 500px) {
        width: 450px;
    }`*/

const person = (props) =>{
       /* const style ={
            '@media(min-width: 500px)':{
                width:'450px'
            }
        };*/

    return (
        //<div className = "Person" style = {style}>
        <div className ={classes.Person}>
            <p onClick = {props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    );
};

//export default Radium(person);
export default person;
