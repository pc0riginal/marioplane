import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const SignedInLinks =(props)=>{
    console.log(props)
    const {initial} = props;
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={props.signOut}>Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initial}</NavLink></li>
        </ul>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        initial:state.firebase.profile.initial,
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        signOut:() => dispatch(signOut())
    }
}
export default compose(
    firestoreConnect(['users']),
    connect(mapStateToProps,mapDispatchToProps),
)(SignedInLinks);