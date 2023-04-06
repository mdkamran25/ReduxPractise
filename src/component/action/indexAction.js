export const addTodo = (data) =>{
    return {
        type:'addTodo',
        payload: {
            id: new Date().getTime.toString(),
            data: data
        }
    }
}