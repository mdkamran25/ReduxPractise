export const showData = (id) =>{
    console.log(id, "action")
    return {
        type: "showdata",
        payload:id
    }
} 

export const showModaled = (index) =>{
    return {
        type: "showmodal",
        payload: index
    }
}

