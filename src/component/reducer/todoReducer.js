const todoReducer = (state = [], action) =>{
    switch (action.type){
        case "addTodo":
            const {id, data} = action.payload;
            return{
                ...state,
                data: [
                    ...state, 
                    {
                        id: id,
                        data:data
                    }
                ]
            }
        default: return state;
    }
}
export default todoReducer;