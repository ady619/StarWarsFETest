import React from "react";
import { useEffect, useState } from "react";
import useApiData from "../../customHooks/useApiData";
import VehicleList from "./VehicleList"
import './styles/Home.scss'
import CircularProgressBar from "../utils/CircularProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { starshipsThunk } from "./listService";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.starships.data
    });
    // const [url, setUrl] = useState("https://swapi.dev/api/starships")
    // const { data, loading, error } = useApiData(url);
    useEffect(() => {
        dispatch(starshipsThunk())
    }, [dispatch])

    const clickPrevious = () => {
        // if (data && data.previous) {
        //     setUrl(data.previous)
        // }
    }

    const clickNext = () => {
        // if (data && data.next) {
        //     setUrl(data.next)
        // }
    }

    if (data && data.status === 'failed') {
        return <div>Error: {data.error}</div>;
      }

    return (
        <div className="home-background">
            <img className="starwars-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
            { data && (
            data.status === 'loading' ? 
            <CircularProgressBar text="Please wait" /> : 
            <div>
                <VehicleList list={data.results}/>
                <div className="footer">
                    <button onClick={() => clickPrevious()} className="nav-buttons">Previous</button>
                    <button onClick={() => clickNext()} className="nav-buttons">Next</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Home