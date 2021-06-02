import React, { useRef, useState} from 'react';
import { addTodo } from "../store/actions";
import { connect } from 'react-redux';


const Add = (props) => {
    let nameInput = useRef(null);
    let bodyInput = useRef(null);
    const [wantAdd,setWantAdd] = useState(false);


    return (<>
        <button value="+" onClick={() => setWantAdd(!wantAdd )} >ADD</button>
        {wantAdd && <div> <input type="text" placeholder="title"   ref={nameInput}></input>
        <input type="text" placeholder="body"  ref={bodyInput}></input>
        <button onClick={()=>  { setWantAdd(!wantAdd ); props.addTodo({userId:props.user._id, title:nameInput.current.value,body:bodyInput.current.value})}}>save</button>
        </div>}
    </>);
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addTodo })(Add);