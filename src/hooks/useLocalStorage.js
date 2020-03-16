import { useState } from 'react'

const useLocalStorage = (localData) => {
    const [storage, setState] = useState(localStorage.getItem(localData))
    const setStorage = (newData) => {
        localStorage.setItem(localData, newData)
        setState(newData)
    }
    return [storage, setStorage]
}

export default useLocalStorage

