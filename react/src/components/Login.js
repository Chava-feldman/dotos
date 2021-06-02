import React, { useRef } from 'react';
import axios from 'axios';
import { useHistory, Link, Route } from 'react-router-dom';
import { isValid } from "../store/actions";
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import '../App.css';


const Login = (props) => {


    let txtName = useRef(null);
    let txtMail = useRef(null);
    const checkLoginUser = (txtName, txtMail) => {
        props.isValid(txtName, txtMail);
        if (props.user.name != null) {
            redirectTodos();
        }

    }


    const history = useHistory();

    function redirectTodos() {
        history.push("/todos");
    }
    function redirectRegister() {
        history.push("/register");
    }


    return (<div>
        <br/>
        <Input id="standard-basic" label="Standard" inputProps={{ 'aria-label': 'description' }}  placeholder="שם משתמש" ref={txtName}/>
        <br/>
        <Input id="standard-basic" label="Standard" inputProps={{ 'aria-label': 'description' }}  placeholder="הכנס מייל" ref={txtMail}/>

        <br/>
        <Button variant="outlined" color="primary"  onClick={() => { checkLoginUser("Leanne Graham", "Sincere@april.biz") }} value="" >GET STARTED :)</Button>
        {/* <input type="button" onClick={() => { checkLoginUser(txtName.current.value, txtMail.current.value) }}></input> */}
        
        <br></br>
        <p>
        still not regiter? 
        <Button color="primary">
            <Link to="/register">sign up </Link>
        </Button>

        </p>


    </div>);

}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { isValid })(Login);