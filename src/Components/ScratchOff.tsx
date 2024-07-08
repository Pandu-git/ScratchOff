import { log } from "console";
import "./ScratchOff.css"
import { Winnings } from "./Winnings";
import { useContext } from "react";
import { context } from "./CartContext";

interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    addToCart?:(item:ScratchOffProps)=>void
    isCartview?:boolean,
}


export const ScratchOff:React.FC<ScratchOffProps>=(props)=>{
    const cartUpdate=useContext(context);
    
    const { Name, No, Img, Price, Currently_at, addToCart, isCartview } = props;
    //if (props.isCartview==true){}
    //if (props.isCartview){}
    const handleCart=(No:number,Currently_at:number)=>{
        if (isCartview){
            Winnings[No-1].find((ticket)=>{if(ticket.ticketNumber===Currently_at){
                console.log(`You have won ${ticket.priceAmount}`)
                return 
            } } )
            if (cartUpdate){

            let updatedCart= cartUpdate?.cart?.filter((item)=>
             !(item.No===No && item.Currently_at===Currently_at)
            )
            //console.log(updatedCart);
            cartUpdate?.setCart(updatedCart||[])  
            }

        }else {
            if (addToCart){
                addToCart(props)
            }
        }

    }
        
    //console.log("called")
return (
    <div className="Individual">
        <h3>{No}</h3> <h3>{Name} </h3>
        <img src={Img} alt="" />
        <p> Price:{Price}</p>
        <p>{isCartview?"Number":"Currently at"}  {Currently_at} </p>
        <button onClick={()=>{handleCart(No,Currently_at)}}>{props.isCartview?"Scratch":"Add to Cart"}</button>
    </div>
)
}
