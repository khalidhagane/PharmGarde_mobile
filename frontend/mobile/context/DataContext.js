import { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        location: null,
    })

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
