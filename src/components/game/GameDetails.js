import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { ReviewContext } from "./ReviewProvider"
import { ButtonGroup, Button } from 'react-bootstrap'
import { RatingContext } from "./RatingProvider"
import "./game_details.css"

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const { getReviewsByGameId } = useContext(ReviewContext)
    const { createRating, getRatingsByGameId } = useContext(RatingContext)
    const [ remoteGame, setRemoteGame ] = useState([])
    const [ remoteReviews, setRemoteReviews ] = useState([])
    const [ remoteRatings, setRemoteRatings ] = useState([])
    const [ remoteAverage, setRemoteAverage ] = useState([])
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

    useEffect(() => {
        getRatingsByGameId(gameId).then((data) => {
            setRemoteRatings(data)
        })
    }, [gameId])
    
    useEffect(() => {
        const length = remoteRatings.length
        let total = 0
        for (let i = 0; i < length; i++) {
            total += remoteRatings[i].rating
        }
        const average = ( total / length)
        setRemoteAverage(average)
    }, [gameId, remoteRatings])

    const registerRating = (ratNum) => {
        createRating({
            game: gameId,
            rating: ratNum
        }) 
    }

    return (
        <>
        <button onClick={() => {
            history.push(`/games/${gameId}/review`)
        }}>Review Game</button>
        <br />
        <br />
        <div className="title__box">
            <div>{remoteGame.title}</div>
            <div>{remoteGame.description}</div>
            <div>Designer: {remoteGame.designer}</div>
            <div>Playtime: {remoteGame.est_time}</div>
            <div>Players: {remoteGame.number_of_players}</div>
            <br/>
        </div>
            
        <div className="review__box">Reviews
        <br />
        <br />
        {remoteReviews.map(review => (
            <>
            <div className={review.id}>{review.review}</div>
            <br/>
            </>
        ))}
        </div>
        <div className="rating__box">
            Rate me!
            <br />
            Average rating: {remoteAverage}
        <div className="button__box">
            <ButtonGroup aria-label="rating toolbar">
                <Button variant="primary" onClick={(event) => {
                    
                    registerRating(1)
                    history.push(`/games/${gameId}`)
                    }}>1</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(2)
                    }}>2</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(3)
                    }}>3</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(4)
                    }}>4</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(5)
                    }}>5</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(6)
                    }}>6</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(7)
                    }}>7</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(8)
                    }}>8</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(9)
                    }}>9</Button>
                <Button variant="primary" onClick={(event) => {
                    event.preventDefault()
                    registerRating(10)
                    }}>10</Button>
            </ButtonGroup>
        </div>
        </div>
        </>
    )
}