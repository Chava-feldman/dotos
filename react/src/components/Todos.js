import { useParams } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addUser,searchTodos } from "../store/actions";
import TodoDetails from './TodoDetails';
import Edit from './Edit';
import Add from './Add';
import '../App.css';



const Todos = (props) => {
    // todolistState=props.todosList;
    let txt = useRef(null);

    return (<>
{             props.user.name != "null" &&
<div>
       <input type="text" ref={txt} onKeyUp={() => {
            console.log(props.todosForSearch);
            props.searchTodos(txt.current.value)
        }} placeholder="I search for.." />
        <br/>
        <br/>
        {   props.todosForSearch.map((item) => {
            if (!item.done)
                return <Todo key={item._id} item={item}></Todo>
        })}

        <TodoDetails></TodoDetails>
        {props.currentTodo != "null" && <Edit ></Edit>}
        <Add></Add>
        </div>}
    </>);

}
const mapStateToProps = (state) => {
    return {
        todosList: state.todosList,
        currentTodo: state.currentTodo,
        todosForSearch:state.todosForSearch,
        user: state.user

    }
}

export default connect(mapStateToProps, {searchTodos})(Todos);