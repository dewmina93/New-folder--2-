import { Card } from "./components/ui/card";
import airpots from "./assets/product/airpods-max.png"
import { Button } from "./components/ui/button";
import ProductCards from "./ProductCards";
import { useState } from "react";



function ProductCard(props) {
    const [num, setNum]=useState(0);

    const handleAdd = (e)=>{
        setNum(num+1)
    }
    return ( 
    
            <Card  >
                <div className="h-80 bg-card rounded-lg p-4 relative w-80">
                    <img src={props.image} className="block"/>
                </div>

                <div className="flex p-4 mt-4 items-center justify-between">
                    <h2 className="text-2xl font-semibold">{props.name}</h2>
                    <span className="block text-lg font-medium items-center">${props.price}</span>
                    <p>{num}</p>
                </div>
                <div>
                    <p>{props.description} </p>
                </div>

                <div className="mt-1 p-4 ">
                    <Button onClick={handleAdd}>Add to card</Button>
                </div>
            </Card>
        
     );
}

export default ProductCard;