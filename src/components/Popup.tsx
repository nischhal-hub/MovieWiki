import React, { useEffect} from 'react'
import { useGlobalContext } from '../context'
const Popup = () => {
    const { popUp, setPopUp } = useGlobalContext();
    useEffect(() => {
        setTimeout(() => {
            setPopUp({ visible: false, type: "", msg: "" })
        }, 2000)
    }, [popUp])



    return (<>
        <div className='fixed top-30 right-0 z-40'>
            <div className='w-80 h-20 rounded-md bg-accent text-textLight flex justify-center items-center'>
                <p>{popUp.msg}</p>
            </div>
        </div>
    </>)


}

export default Popup