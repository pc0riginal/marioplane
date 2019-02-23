const createProject=(project)=>{
    console.log(project);
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //connect to firstore
        const firebase = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firebase.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'ADD_PROJECT',project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})

        })
    }
};

export default createProject;