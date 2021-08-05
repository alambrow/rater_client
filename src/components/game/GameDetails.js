// useParams to render component GameDetail

import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const [ remoteGame, setRemoteGame ] = useState([])
    const { gameId } = useParams()

    useEffect(() => {
        // getGameById
        getGameById(gameId).then((data) => {
            setRemoteGame(data)
            
        })
    }, [gameId])
    console.log(remoteGame)
    return (
        <>
        <div>{remoteGame.title}</div>
        <div>{remoteGame.description}</div>
        <div>{remoteGame.designer}</div>
        <div>{remoteGame.est_time}</div>
        <div>{remoteGame.number_of_players}</div>
        </>
    )
}