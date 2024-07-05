import { log } from "console";
import "./ScratchOff.css"
interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    addToCart:(item:ScratchOffProps)=>void
}


export const ScratchOff:React.FC<ScratchOffProps>=(props)=>{
    const { Name, No, Img, Price, Currently_at, addToCart } = props;
    const handleCart=()=>{
        addToCart(props)
    }
    //console.log("called")
return (
    <div className="Individual">
        <h3>{No}</h3> <h3>{Name} </h3>
        <img src={Img} alt="" />
        <p> Price:{Price}</p>
        <p>Currently at {Currently_at} </p>
        <button onClick={()=>{handleCart()}}>Add To Cart</button>
    </div>
)
}
