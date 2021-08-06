import React, { useState} from "react"

export const ReviewContext = React.createContext()

export const ReviewProvider = (props) => {
    const [ reviews, setReviews ] = useState([])

    const createReview = (review) => {
        return fetch("http://127.0.0.1:8000/reviews", {
            method: "POST", 
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)          
        })
        .then(res => res.json())
    }

    const getReviewsByGameId = (gameId) => {
        return fetch(`http://127.0.0.1:8000/reviews?game=${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
    }

    return (
        <ReviewContext.Provider value={{ createReview, getReviewsByGameId }}>
            {props.children}
        </ReviewContext.Provider>
    )
}