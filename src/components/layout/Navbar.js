import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedUpLinks from './SignedUpLinks';
import {connect} from "react-redux";

const Navbar =(props)=>{
    const {auth} = props;
    // console.log(auth);
    const link = auth.uid ? <SignedInLinks /> : <SignedUpLinks />  
    return(
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlane</Link>
                {link}
            </div>
        </nav>
    )
}

const mapStateToProps =(state)=>{
    
    return{
        auth:state.firebase.auth,
    }
}
export default connect(mapStateToProps)(Navbar);