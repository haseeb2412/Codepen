import { createContext, useState } from "react";

export const DataContext = createContext('');
const Dataprovider = ({children})=>{

    const [html,sethtml]=useState();
    const [css,setcss]=useState();
    const [js,setjs]=useState();
    return (
        <DataContext.Provider
        value={{
            html,
            sethtml,
            css,
            setcss,
            js,
            setjs,
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default Dataprovider;