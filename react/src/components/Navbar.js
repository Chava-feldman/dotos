// import React, {  } from 'react';
import { useHistory, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component,useRef } from 'react';
// import NavDropdown from '../node_modules/@bit/react-bootstrap.react-bootstrap.nav-dropdown';
// import Nav from '@bit/react-bootstrap.react-bootstrap.nav';
// import Button from '@bit/react-bootstrap.react-bootstrap.button';
// import Form from '@bit/react-bootstrap.react-bootstrap.form';
// import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control';
// import Navbar2 from '@bit/react-bootstrap.react-bootstrap.navbar';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';






const Navbar = (props) => {
    return (<>
        {
            props.user.name != "null" &&
            <div>
                <button>
                    <Link to="/todos">  what're my todos? </Link>
                   
                </button>
                <button>
                <Link to="/history">  i did it :)  </Link>                   
                </button>
                <button>
                    <Link to="/#">  {props.user.name} </Link>

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

export default connect(mapStateToProps, null)(Navbar);