const initialState={
    movieList:[]
}


const movieReducer=(state=initialState,action)=>{
    const {type,payload}=action
    
    switch (type) {
        case "MovieItems": return {
            movieList:[...payload]
        }
        default: return state
            
    }

}

export default movieReducer;