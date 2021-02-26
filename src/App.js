import React,{useEffect, useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import List from './List';
import './index.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [item, setItem] = useState(" ");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
     // console.log(snapshot.docs.map(doc => doc.data().item));

      setTodos(snapshot.docs.map(doc => ({id: doc.id, item:doc.data().item})))  //allow to read from database  && fetched the id to delete item
    })
  },[]);

  const itemEvent = (event) =>{
    event.preventDefault(); // stop the refresh
    setItem(event.target.value);
    //console.log('Im working');
  }

  const listOfItem =() =>{
    setTodos((prev)=>{ return [...prev, item]; })
    db.collection('todos').add({   // add to the database of collection 'todos'
      item:item,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setItem("");

  }
  return(
  <div className="app">
    <div className="center">
    <h1>
      TODO List
    </h1>
    <TextField id="standard-basic" value={item} placeholder="Add the todo" onChange={itemEvent}/>
    <Button disabled={!item} variant="contained" color="primary"  onClick={listOfItem}>
      <AddIcon/>
    </Button>
    <ol>{todos.map((val, index) => {
        return <List key={index} item={val} />;
      })}
    </ol>
    </div>
  </div>
  );
};

export default App;
