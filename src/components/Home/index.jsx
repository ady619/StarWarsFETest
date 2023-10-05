import { useEffect, useState } from "react";
import useApiData from "../../customHooks/useApiData";
import VehicleList from "../VehicleList"
import './index.scss'
// import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";

const Home = () => {
    const [url, setUrl] = useState("https://swapi.dev/api/starships")

    const { data, loading, error } = useApiData(url);

    useEffect(() => {

    }, [url])

    const clickPrevious = () => {
        if (data && data.previous) {
            setUrl(data.previous)
        }
    }

    const clickNext = () => {
        if (data && data.next) {
            setUrl(data.next)
        }
    }


    return (
        <div className="home-background">

            <img className="starwars-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
            <div>{loading && <div className="progress">Getting Data from API... </div>}</div>
            {!loading && <div><VehicleList list={data} className="vehicle-list" /><div className="footer">
                <button onClick={() => clickPrevious()} className="nav-buttons">Previous</button>
                <button onClick={() => clickNext()} className="nav-buttons">Next</button>
            </div></div>}

        </div>
    )
}

export default Home