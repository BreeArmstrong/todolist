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
    <a data-id={id} onClick={handleDelete} href="#">Delete</a>
    <div>{JSON.stringify(handleDelete)}</div>
   </li>
 );
};

function App() {
 // For handling the states in the todo array
 const [state, setState] = useState({});
 //For displaying specific types
 const [showType, setShowType] = useState('all');
 
 const handleEnter = e => {
  if(e.key === 'Enter') {
   const id = uuid.v4();
   setState({
    ...state,
    [id]: {
     name: e.target.value,
     id,
     complete: false
    }
   });
   e.target.value = '';
  }
 };
 
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
  switch (type) {
  case (type === 'active'){
   return 
  }
  }
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
    <input type="text" placeholder={"Todo Here"} onKeyDown={handleEnter}/>
    <h1>Todos</h1>
    <ul>
     <li> <a href="#" data-type="active" onClick={handleShowType}>Show Active</a></li>
     <li> <a href="#" data-type="complete" onClick={handleShowType}>Show Complete</a></li>
     <li> <a href="#" data-type="all" onClick={handleShowType}>Show All</a></li>
    </ul>
    <ul className={`todos ${showType}`}>
     {renderedTodos}
    </ul>
   </section>
 );
}

export default App;
