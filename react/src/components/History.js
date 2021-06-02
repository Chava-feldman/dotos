import { useParams } from 'react-router-dom';
import axios from 'axios';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addUser } from "../store/actions";
import TodoDetails from './TodoDetails';
import Edit from './Edit';
import Add from './Add';
import React , { useState }  from 'react';


const History = (props) => {    
    return (  <>
            {   props.todosList.map((item) => {
            if(item.done)
            return <Todo key={item._id} item={item}></Todo>
        })}
    </>);
}
 
const mapStateToProps = (state) => {
    return {
        todosList: state.todosList,
    }
}

export default connect(mapStateToProps, null)(History);