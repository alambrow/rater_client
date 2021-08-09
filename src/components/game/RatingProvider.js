import React, { useState } from "react";

export const RatingContext = React.createContext()

export const RatingProvider = (props) => {
    const [ ratings, setRatings ] = useState([])

    const getRatings = () => {
        return fetch("http://localhost:8000/ratings", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
        .then(setRatings)
    }

    const getRatingsByGameId = (gameId) => {
        return fetch(`http://127.0.0.1:8000/ratings?game=${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
    }

    const createRating = (rating) => {
        return fetch("http://127.0.0.1:8000/ratings", {
            method: "POST", 
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rating)
        })
        .then(res => res.json())
        .then(getRatings)
    }
    
    return (
        <RatingContext.Provider value={{ ratings, getRatings, createRating, getRatingsByGameId}}>
            {props.children}
        </RatingContext.Provider>
    )
}