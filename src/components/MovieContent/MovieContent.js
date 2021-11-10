import React from "react";
import MovieBox from "../MovieBox/MovieBox";
import './MovieContent.css';

const MovieContent = (props) => {
    if (props.pageContent === 'home')
    {return (
        <div className="moviecontent">
            <MovieBox pageCont='home'/>
        </div>
    )}return (
        <div className="moviecontent">
            <MovieBox pageCont='wishlist'/>
        </div>
    )
}

export default MovieContent;