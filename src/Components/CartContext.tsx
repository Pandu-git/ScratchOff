import { createContext, useState } from "react";


interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    //addToCart:(item:ScratchOffProps)=>void
}
interface contextType{
    cart:ScratchOffProps[]|null,
    setCart:React.Dispatch<React.SetStateAction<ScratchOffProps[]|null>>
    }
interface contextProviderProps{
    children:React.ReactNode
}
export const context=createContext<contextType|null>(null)

export const ContextProvider=({children}:contextProviderProps)=>{
    const [cart,setCart]=useState<ScratchOffProps[]|null>(null);
    return (
        <context.Provider value={{cart,setCart}} >
            {children}
        </context.Provider>
    )

}