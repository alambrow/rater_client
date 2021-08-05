import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { GameContext } from "./GameProvider";

export const GameForm = () => {
    const history = useHistory()
    const [currentGame, setCurrentGame] = useState({})
    const { createGame } = useContext(GameContext)

    const handleControlledInputChange = (event) => {
        const newGameState = { ...currentGame }
        newGameState[event.target.name] = event.target.value
        console.log(newGameState)
        setCurrentGame(newGameState)
    }

    return (
        <form className="new_game_form">
            <h2>Create New Game</h2>
            <fieldset>
                <label>Title</label>
                <input type="text" name="title" onChange={handleControlledInputChange} required placeholder="Game title" />
            </fieldset>
            <fieldset>
                <label>Description</label>
                <input type="text" name="description" onChange={handleControlledInputChange} required placeholder="Game description" />
            </fieldset>
            <fieldset>
                <label>Designer</label>
                <input type="text" name="designer" onChange={handleControlledInputChange} required placeholder="Game designer/maker/manufacturer" />
            </fieldset>
            <fieldset>
                <label>Number of Players</label>
                <input type="int" name="number_of_players" onChange={handleControlledInputChange} required />
            </fieldset>
            <fieldset>
                <label>Estimated Time</label>
                <input type="text" name="est_time" onChange={handleControlledInputChange} required placeholder="Estimated time" />
            </fieldset>
            <fieldset>
                <label>Age Recommendation:</label>
                <input type="text" name="age_rec" onChange={handleControlledInputChange} required placeholder="Age recommendation" />
            </fieldset>
            <br />
            <button onClick={event => {
                event.preventDefault()

                const game = {
                    title: currentGame.title,
                    description: currentGame.description,
                    designer: currentGame.designer,
                    number_of_players: currentGame.number_of_players,
                    est_time: currentGame.est_time,
                    age_rec: currentGame.age_rec
                }

                createGame(game)
                .then(() => history.push("/games"))
            }}>Save</button>
        </form>
    )
}