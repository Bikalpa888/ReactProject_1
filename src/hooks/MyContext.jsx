import {createContext } from  "react";

 const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    return (
        <MyContext.Provider value={'Good Afternoon'}>
            {children}
        </MyContext.Provider>
    )
}
export {MyContext}
