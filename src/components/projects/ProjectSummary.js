import React from 'react'
// import moment from 'moment'

const ProjectSummary = ({project})=>{
    console.log(project)
    return(
        <div className="card z-depth-0 project-summury">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the {project.authorFirstName +" "+ project.authorLastName}</p>
                {/* <p className="grey-text">{project.createdAt}</p> */}
            </div>
        </div>
    )
}
export default ProjectSummary