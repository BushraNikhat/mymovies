import axios from "axios";

export const fetchList=()=>{
    return  async(dispatch)=>{
        try{
            const response=await axios.get(`https://swapi.dev/api/people`)
            dispatch(loadDetails(response.data.results))

        }catch(error){
            dispatch(ErrorMsg(error.message))
        }
    }
}



const loadDetails=(data)=>{
 
    return {
        type:"StarWarItems",
        payload:data
    }
}
const ErrorMsg=(error)=>{
 
    return {
        type:"AddError",
        payload:error
    }
}