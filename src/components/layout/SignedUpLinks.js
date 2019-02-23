import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const SignedUpLinks =(props)=>{
    // console.log(props)
    // setTimeout(() => {
    //     props.history.push('/')
    // }, 2000);
    return(
        <ul className="right">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}

export default withRouter(SignedUpLinks);