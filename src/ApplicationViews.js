import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./components/game/GameProvider"
import { GameList } from "./components/game/GameList"
import { GameDetail } from "./components/game/GameDetails"
import { GameForm } from "./components/game/GameForm"

export const ApplicationViews = () => {
    return <>
    
        <GameProvider>
            <Route exact path="/">
                <h1>home</h1>
            </Route>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetail />
            </Route>
            <Route exact path="/games/create">
                <GameForm />
            </Route>
            <Route exact path="/categories">
                <h1>Categories</h1>
            </Route>
        </GameProvider>

    </>
}