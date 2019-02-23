const initState={
    authError:null,
}

const authReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESSED':
            console.log('login successed');
            return{
                ...state,
                authError:null,
            }
        case 'LOGIN_ERROR':
            console.log(action.error)
            return{
                ...state,
                authError:action.error,
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return state;
        case 'SIGNUP_ERROR':
            console.log(action.error);
            return{
                ...state,
                authError:action.error,
            }
        default:
            return state;
    }
}
export default authReducer