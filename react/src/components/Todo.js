import React from 'react';
import { deletTodo,currentTodo,setDone } from "../store/actions";
import { connect } from 'react-redux';
import TodoDetails from './TodoDetails';
import Edit from './Edit';
import '../App.css';




const Todo = (props) => {

    return (<>
    <div className="todocard">
        <input type="checkbox" onClick={()=> {props.setDone(props.item)}}></input>
        <button onClick={() => {props.deletTodo(props.item)}} >X</button>
       {props.item.title}
       <button onClick={() => {props.currentTodo(props.item)}} >view</button>
       
    </div>

    </>);
}

export default connect(null, { deletTodo,currentTodo,setDone })(Todo);