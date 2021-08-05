import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

export const GameForm = () => {

    return (
        <form className="new_game_form">
            <h2>Create New Game</h2>
            <fieldset>
                <label>Title</label>
                <input type="text" name="title" required placeholder="Game title" />
            </fieldset>
            <fieldset>
                <label>Description</label>
                <input type="text" name="description" required placeholder="Game description" />
            </fieldset>
            <fieldset>
                <label>Designer</label>
                <input type="text" name="designer" required placeholder="Game designer/maker/manufacturer" />
            </fieldset>
            <fieldset>
                <label>Number of Players</label>
                <input type="int" name="number_of_players" required />
            </fieldset>
            <fieldset>
                <label>Estimated Time</label>
                <input type="text" name="est_time" required placeholder="Estimated time" />
            </fieldset>
            <fieldset>
                <label>Age Recommendation:</label>
                <input type="text" name="age_rec" required placeholder="Age recommendation" />
            </fieldset>
            <br />
            <button>Save</button>
        </form>
    )
}