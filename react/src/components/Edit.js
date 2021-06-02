import React, { useRef } from 'react';
import { editTodo } from "../store/actions";
import { connect } from 'react-redux';


const Edit = (props) => {
    let nameInput = useRef(null);
    let bodyInput = useRef(null);

    return (<>
        <input type="text" placeholder="edit title" defaultValue={props.currentTodo.title || ''}  ref={nameInput}></input>
        <input type="text" placeholder="edit body" defaultValue={props.currentTodo.body || ''} ref={bodyInput}></input>
        <button onClick={()=> {props.editTodo({_id:props.currentTodo._id,userId:props.currentTodo.userId,  title:nameInput.current.value,body:bodyInput.current.value})}}>save</button>
    </>);
}
const mapStateToProps = (state) => {
    return {
        currentTodo: state.currentTodo
    }
}

export default connect(mapStateToProps, { editTodo })(Edit);