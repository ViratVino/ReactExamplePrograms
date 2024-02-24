
const UserReducer =(state,action)=>{

let {type,users,singleUser}=action;
    switch(action.type){
        case 'FETCH':
          return{
               ...state,
               users:action.payload
            };
        case 'SINGLE_USER':
            // let filteredData=state.filter(user=>{return (user.id === user.id)})
            return{
                ...state,
                singleUser
                 };

        default:
            return{
                ...state
    
            }
    }
}


export default UserReducer;