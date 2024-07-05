
import { ScratchOff } from "./ScratchOff"
import { data } from "./data"
import "./ScratchOff.css"
import { useContext } from "react"
import { context } from "./CartContext"
import { Link } from "react-router-dom"

interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    //addToCart:(item:ScratchOffProps)=>void
}



export const HomePage:React.FC=()=>{
    
//     const [cart,setCart]=useState<ScratchOffProps[]>([]);
const meth=useContext(context)
const handleCart=(item:ScratchOffProps)=>{
//     console.log(item)
if (meth)    {
    const updatedCart=meth.cart?[...meth.cart,item]:[item];
    meth.setCart(updatedCart)

}

  }
console.log("homepage cart", meth?.cart);



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