import React from 'react';
import { deletTodo,currentTodo } from "../store/actions";
import { connect } from 'react-redux';
import Edit from './Edit';


const TodoDetails = (props) => {
    return ( <>
   <b> {props.currentTodo.title}</b>
   <p> {props.currentTodo.body}</p>
    </> );
}
const mapStateToProps = (state) => {
    return {
        currentTodo: state.currentTodo
    }
}

export default connect(mapStateToProps, null)(TodoDetails);