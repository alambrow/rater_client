import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [ categories, setCategories ] = useState([])

    const getCategories = () => {
        return fetch("http://127.0.0.1:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(res => res.json())
        .then(setCategories)
    }

    return (
        <CategoryContext.Provider value={{ categories, getCategories }} >
            {props.children}
        </CategoryContext.Provider>
    )
}