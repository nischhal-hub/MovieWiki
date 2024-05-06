import React, { FC, ReactNode, createContext, useContext, useState } from 'react'
import useFetch from './useFetch'
import { ErrObj } from './interface'
type ChildrenProp = {
    children: ReactNode;
}
type AppContextType = {
    query:string;
    setQuery:(query:string)=>void;
    loading:boolean;
    error:ErrObj;
    result:any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: FC<ChildrenProp> = ({ children }) => {
    const [query, setQuery] = useState<string>('/movie/now_playing')
    const { loading, error, result } = useFetch(query)
    return (
        <AppContext.Provider value={{ query, setQuery, loading, error, result }} >{children}</AppContext.Provider>
    )
}
export const useGlobalContext = ():AppContextType => {
    const context = useContext(AppContext)
    if(!context){
        throw new Error("UseGlobalcontext must be used within app provider.")
        
    }
    return context;
}
export { AppContext, AppProvider }