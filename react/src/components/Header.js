import React, { useRef } from 'react';
import { useHistory, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../store/actions';
import { Button } from '@material-ui/core';
import  './Header.css';


const Header = (props) => {

    return (<>
        { props.user.name == "null" &&
            <div class="logindiv">
                <Link to="/login"> 
                <Button variant="contained" color="primary" >
                     login 
                </Button>
                </Link>
            </div>
        }

        { props.user.name != "null" &&
            <div>
                Hi   {props.user.name} ! 
                <button onClick={ ()=>{props.logOut()}}>
                    log out
                </button>
            </div>
        }

    </>);
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logOut })(Header);