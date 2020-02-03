import React, {useState} from 'react';
import uuid from 'uuid';
import './App.css';

const Todo = (props) => {
 const {todo, handleDelete, handleComplete} = props;
 const {id, name, complete} = todo;
 return(
   <li className={`todo ${complete ? 'complete' : ''}`}>
    <input data-id={id} type="checkbox" checked={complete} onChange={handleComplete}/>
    <span className={complete ? 'complete' : ''}>{name}</span>
    <a data-id={id} href="#">Delete</a>
    <div>{JSON.stringify(handleDelete)}</div>
   </li>
 );
};

function App() {
 // For handling the states in the todo array
 const [state, setState] = useState({});
 //For displaying specific types
 const [showType, setShowType] = useState('all');
 
 const handleDelete = e => {
  const {id} = e.target.dataset;
  delete state[id];
  setState({
   ...state
  });
 };
 
 const handleComplete = e => {
  const {id} = e.target.dataset;
  state[id].complete = !state[id].complete;
  setState({
   ...state
  });
 };
 
 const handleShowType = e => {
  const {type} = e.target.dataset;
  console.log(type);
  setShowType(type);
 };
 
 const renderedTodos = Object.values(state)
   .map(t =>
     <Todo handleDelete={handleDelete}
           handleComplete={handleComplete}
           key={t.id}
           todo={t} />
   );
   
 return(
   <section className={'todos'}>
    <input type="text" placeholder={"Todo Here"}/>
    <h1>Todos</h1>
    <ul>
     <li onClick={}>Show Active</li>
     <li onClick={}>Show Complete</li>
     <li onClick={}>Show All</li>
    </ul>
    <ul className={`todos ${showType}`}>
     {renderedTodos}
    </ul>
   </section>
 );
}

export default App;
