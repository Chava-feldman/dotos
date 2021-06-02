import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/actions'
import { useHistory, Link, Route } from 'react-router-dom'
import Dialoge from './Dialoge';



const Register = (props) => {

    let txtName = useRef(null);
    let txtCity = useRef(null);
    let txtStreet = useRef(null);
    let txtMail = useRef(null);
    let txtTell = useRef(null);

    const regiterNewUser = (txtName, txtCity, txtStreet, txtMail, txtTell) => {
        props.addUser({ name: txtName, city: txtCity, street: txtStreet, mail: txtMail, tell: txtTell });

    }



    return (<>
        <input type="text" placeholder="שם משתמש" ref={txtName}></input>
        <input type="text" placeholder="עיר" ref={txtCity}></input>
        <input type="text" placeholder="רחוב" ref={txtStreet}></input>
        <input type="mail" placeholder="מייל" ref={txtMail}></input>
        <input type="text" placeholder="טלפון" ref={txtTell}></input>
        <input type="button" value="להרשמה" onClick={() => { regiterNewUser(txtName.current.value, txtCity.current.value, txtStreet.current.value, txtMail.current.value, txtTell.current.value,) }}></input>
        {props.user.name!="null"&& <Dialoge></Dialoge>}
    </>);
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { addUser })(Register);