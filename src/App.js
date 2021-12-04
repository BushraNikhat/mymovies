import React, { useEffect } from "react";
import Actors from "./Components/Actors";
import { fetchList } from "./redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import List from "./Components/List";

const App = () => {
  const dispatch = useDispatch();

  // list of all start war movies from redux store
  const { list } = useSelector((state) => state.starWarReducer);



  // dispatching the action creator to fetch the list of all starwar movies
  useEffect(() => {
    try {
      dispatch(fetchList());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <>
      <div className="main bg-dark ">
        <div className="row g-0">
          <div className="col-lg-6 col-md-8 col-sm-9 col-11 mx-auto">
            <Actors list={list} />
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
