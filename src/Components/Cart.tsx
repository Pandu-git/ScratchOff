import { useContext } from "react";
import { context } from "./CartContext";
import { ScratchOff } from "./ScratchOff";
import "./ScratchOff.css";

export const Cart = () => {
    const cartInfo = useContext(context);
    const data1 = cartInfo?.cart;
    console.log('Cart cart',data1)

    return (
        <div className="ScratchOff">
            {data1 && data1.map((item) => (
                <ScratchOff
                    key={item.No}
                    Name={item.Name} 
                    No={item.No}
                    Img={item.Img}
                    Price={item.Price}
                    Currently_at={item.Currently_at}
                    addToCart={() => {}} 
                />
            ))}
        </div>
    );
};
