import React from "react";
import MoviesDataService from "../services/movies"
import {Router, Routes} from 'react-router-dom'

const MoviesList=props=> {
    const[movies,setMovies] = useState([])
    const[searchTitle, setSearchTitle] = useState("")
    const[searchRating, setSearchRating]=useState("")
    const[ratings, setRatings] = useState(["All Ratings"])
}