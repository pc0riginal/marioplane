import React from 'react'
import {connect} from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from 'react-router-dom';
// import moment from 'moment';

const ProjectDetails=(props)=> {
    // const id = props.match.params.id
    // console.log(props)
    const {project ,auth} = props;
    console.log(props)
    if(!auth.uid) return <Redirect to="/signin" />
    if(project){
        return(
            <div className="section container project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">{project.title}</div>
                        <p className="card-body">{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>created by {project.authorFirstName} {project.authorLastName}</div> 
                        {/* <div>{project.createdAt}</div> */}
                    </div>
                </div>
            </div>
        )
    }
    else{
    return (
        <div className="container center">
            <p>Project Loding...</p>
        </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project:project,
        auth:state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails);
