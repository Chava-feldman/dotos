import React from 'react';
import { useHistory, Link, Route } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
const Dialoge = (props) => {

    function redirectTodos() {
        history.push("/todos");
    }

    const history = useHistory();


    return ( <>
    {alert("hi !  pls press 'ok', for view your todos list")}
        { redirectTodos()}

    </> );
}
 
export default Dialoge;