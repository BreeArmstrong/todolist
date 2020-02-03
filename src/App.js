import React, {useState} from 'react';
import uuid from 'uuid';
import './App.css';

const Todo = (props) => {
 const {todo, handleDelete} = props;
 const {id, name, complete} = todo;
 return(
   <li className={}>
    <input data-id={id} type="checkbox" checked={complete}/>
    <span className={}>{name}</span>
    <a data-id={id} href="#">Delete</a>
    <div>{JSON.stringify(handleDelete)}</div>
   </li>
 );
};

function App() {
 return;
}

export default App;
