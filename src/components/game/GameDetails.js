// useParams to render component GameDetail

import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { ReviewContext } from "./ReviewProvider"

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const { getReviewsByGameId } = useContext(ReviewContext)
    const [ remoteGame, setRemoteGame ] = useState([])
    const [ remoteReviews, setRemoteReviews ] = useState([])
    const { gameId } = useParams()
    const history = useHistory()

    useEffect(() => {
        // getGameById
        getGameById(gameId).then((data) => {
            setRemoteGame(data)  
        })
    }, [gameId])

    useEffect(() => {
        getReviewsByGameId(gameId).then((data) => {
            setRemoteReviews(data)
        })
    }, [gameId])
    
    console.log(remoteReviews)
    return (
        <>
        <button onClick={() => {
            history.push(`/games/${gameId}/review`)
        }}>Review Game</button>
        <div>{remoteGame.title}</div>
        <div>{remoteGame.description}</div>
        <div>{remoteGame.designer}</div>
        <div>{remoteGame.est_time}</div>
        <div>{remoteGame.number_of_players}</div>
        <br/>
        <div>Reviews</div>
        <br />
        {remoteReviews.map(review => (
            <>
            <div className={review.id}>{review.review}</div>
            <br/>
            </>
        ))}
        </>
    )
}