import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReviewContext } from "./ReviewProvider";

export const ReviewForm = () => {
    const [ currentReview, setCurrentReview]  = useState({})
    const { createReview } = useContext(ReviewContext)
    const { gameId } = useParams()
    const history = useHistory()
    console.log(gameId, "gameId")

    const handleControlledInputChange = (event) => {
        const newReviewState = { ...currentReview }
        newReviewState[event.target.name] = event.target.value
        console.log(newReviewState)
        setCurrentReview(newReviewState)
    }

    return (
        <form className="new_review_form">
            <h2>Review</h2>
            <fieldset>
                <input type="text" name="review" onChange={handleControlledInputChange} required placeholder="Your review" />
            </fieldset>
            <button onClick={
                event => {
                    event.preventDefault()
                    const review = {
                        review: currentReview.review,
                        game: gameId,
                        player: localStorage.getItem("lu_token")
                    }

                    createReview(review).then(() => history.push(`/games/${gameId}`))
                }
                
            }>Save</button>
        </form>
    )
}