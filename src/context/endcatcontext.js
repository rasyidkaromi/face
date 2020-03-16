import React, { useState, createContext } from 'react'


export const EndCatContext = createContext({
    endCat: 0,
    showEndCat: () => { },
    hideEndCat: () => { },
})

const EndCatProvider = ({ children }) => {

    const showEndCat = () => {
        setEndCataloque(prevState => {
            return {
                ...prevState,
                endCat: prevState.endCat + 1
            }
        })
    }

    const hideEndCat = () => {
        setEndCataloque(prevState => {
            return {
                ...prevState,
                endCat:
                    prevState.endCat > 0 ? prevState.endCat - 1 : 0
            }
        })
    }

    const loadingState = {
        endCat: 0,
        showEndCat,
        hideEndCat
    }

    const [endCataloque, setEndCataloque] = useState(loadingState)

    return (
        <EndCatContext.Provider value={endCataloque}>
            {children}
        </EndCatContext.Provider>
    )
}
export default EndCatProvider

