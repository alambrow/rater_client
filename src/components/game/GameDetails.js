// useParams to render component GameDetail

import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"

export const GameDetail = () => {
    const [ remoteGame, setRemoteGame ] = useState([])
    const { locationId } = useParams()

    useEffect(() => {
        // getGameById
    }, [locationId])
    
    return (
        <>
        <h1>hiii</h1>
        </>
    )
}