
import { ScratchOff } from "./ScratchOff"
import { data } from "./data"
import "./ScratchOff.css"
import { useContext, useEffect } from "react"
import { context } from "./CartContext"
import { Link } from "react-router-dom"
import React from "react"
interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    //addToCart:(item:ScratchOffProps)=>void
}



 const HomePage:React.FC=()=>{
    const meth=useContext(context)
    useEffect(()=>{ 
        const initialMoney=prompt('How much money did you bring Dawg?')
        if (initialMoney!==null){
            const moneyBrought=Number(initialMoney)
            meth?.setMoney(moneyBrought)
            console.log("useEffect Triggered")
        }
      
      },[])
    
//     const [cart,setCart]=useState<ScratchOffProps[]>([]);

//const money=(mon:number)=>{meth?.setMoney(mon)}
const handleCart=(item:ScratchOffProps)=>{
//     console.log(item)
if (meth)    {
    const updatedCart=meth.cart?[...meth.cart,item]:[item];
    meth.setCart(updatedCart)
    data.map((bookItem)=>{
        if (bookItem.No==item.No){
            bookItem.Currently_at+=1;
            
        }
    })

}

  }

  
//console.log("homepage cart", meth?.cart);



    return (
        <div>

            <button><Link to ="/cart">Cart</Link> </button>
            <div className="ScratchOff">
            {
                data.map((item:ScratchOffProps)=>{
                    return <ScratchOff
                    key={item.No}
                    Name={item.Name} 
                    No={item.No}
                    Img={item.Img}
                    Price={item.Price}
                    Currently_at={item.Currently_at}
                    addToCart={handleCart}
                    />
                    
                })
            }
        </div>
            
        </div>
        
            
    )





}

export default React.memo(HomePage);