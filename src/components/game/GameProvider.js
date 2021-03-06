import React, { useState} from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
        .then(setGames)
    }

    const getGameById = gameId => {
        return fetch(`http://127.0.0.1:8000/games/${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
    }

    const createGame = (game) => {
        return fetch("http://127.0.0.1:8000/games", {
            method: "POST", 
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(getGames)
    }

    return (
        <GameContext.Provider value={{ games, getGames, getGameById, createGame }} >
            {props.children}
        </GameContext.Provider>
    )
}