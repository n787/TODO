import React from 'react';
import './List.css';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';
import {Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
//import firebase from 'firebase';
function List(props) {
    const updateItem = (item) =>{
        
    }
 return(
     <div className="listStyle">
    <li> {props.item.item}   
        <Button onClick={updateItem}>
            <EditIcon/>
        </Button>
        <Button className="btn" onClick={event=>db.collection('todos').doc(props.item.id).delete()}>
            <DeleteIcon ClassName="delete" />
        </Button>
        </li>
    </div>
 )
}

export default List;