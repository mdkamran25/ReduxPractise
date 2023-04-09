export const showData = () =>{
    return {
        type: "showdata"
    }
} 

export const showModaled = (index) =>{
    return {
        type: "showmodal",
        payload: index
    }
}

