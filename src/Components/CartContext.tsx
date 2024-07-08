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
    winnings:number,
    setwinnings:React.Dispatch<React.SetStateAction<number>>
    money:number,
    setMoney:React.Dispatch<React.SetStateAction<number>>

    }
interface contextProviderProps{
    children:React.ReactNode
}
export const context=createContext<contextType|null>(null)

export const ContextProvider=({children}:contextProviderProps)=>{
    const [cart,setCart]=useState<ScratchOffProps[]|null>(null);
    const [winnings,setwinnings]=useState<number>(0);
    const [money,setMoney]=useState<number>(0);
    return (
        <context.Provider value={{cart,setCart,winnings,setwinnings,money,setMoney}} >
            {children}
        </context.Provider>
    )

}