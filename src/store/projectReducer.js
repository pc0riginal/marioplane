const initState={
    projects:[
        {id:1,title:'reminder',content:'hello google'},
        {id:2,title:'call',content:'hello google'},
        {id:3,title:'make a call',content:'hello google'},

    ]
}

const projectReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('project created',action.project);
            break;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            break;
        default:
            break;
    }
    return state;
}
export default projectReducer