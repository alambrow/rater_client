import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)
    const history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">
                            <button onClick={() => {
                                history.push(`/games/${game.id}`)
                            }}>
                            {game.title} by {game.designer}
                            </button>
                        </div>
                        <div className="game__players">{game.number_of_players} players </div>
                        <br />
                    </section>
                })
            }
        </article>
    )
}