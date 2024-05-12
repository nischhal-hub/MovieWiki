import React, { FC, ReactNode, createContext, useContext, useState } from 'react'
import useFetch from './useFetch'
import { ErrObj, Favlist, Popup} from './interface'

type ChildrenProp = {
    children: ReactNode;
}
type AppContextType = {
    query:string;
    setQuery:(query:string)=>void;
    loading:boolean;
    error:ErrObj;
    result:any;
    isModalOpen:boolean;
    openModal:()=>void;
    closeModal:()=>void;
    modalData:any;
    setModalData:any;
    favList:Favlist[];
    setFavList: any;
    popUp:Popup;
    setPopUp:any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: FC<ChildrenProp> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalData, setModalData] = useState<null>(null)
    const [query, setQuery] = useState<string>('/movie/now_playing?api_key=259cdbc836d938ec3d03bd4aad0b8b61')
    const [favList, setFavList] = useState<Favlist[]>([])
    const [popUp, setPopUp] = useState<Popup>({visible:false, type:"",msg:""})
    
    const { loading, error, result } = useFetch(query)
    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }

    return (
        <AppContext.Provider value={{ query, setQuery, loading, error, result, isModalOpen, openModal, closeModal,modalData,setModalData ,favList,setFavList, popUp, setPopUp}} >{children}</AppContext.Provider>
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