import axios from "axios";
import React,{useEffect, useState} from "react";
import { loadMovies } from "../redux/action/movieAction";
import { useDispatch} from "react-redux";

const Actors = ({list}) => {
  const [characterUrl,setCharacterUrl]=useState("")
  const dispatch = useDispatch();

// fetching the data related to each character
useEffect(()=>{
  const movieList=async()=>{
        try {
          if(characterUrl){
            const response=await axios.get(characterUrl)

            // dispatch films url of each character to movieAction.js
            dispatch(loadMovies(response.data.films))
          }        
        } catch (error) {
          console.log(error.message);
        }
  }
  movieList()

},[characterUrl,dispatch])

  return (
    <>
      <div className="actor pt-5  mx-auto">
        <h3 className="text-center text-light ">Characters</h3>
        <div className="actorContainer mt-3 mx-auto">
          <select className="form-select " aria-label="Default select example" defaultValue={characterUrl}
                      name="character"
                      onChange={(event) => {
                        setCharacterUrl(event.target.value);
                      }}>
            <option value ="" hidden>Select</option>
            {/* map list of star war character name */}
            {list && list.map((element) => {
                        return <option value={element.url} key={element.url} >{element.name}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Actors;
