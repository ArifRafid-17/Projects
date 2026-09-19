import { useState } from "react";

export default cart

function cart(){
    const [counter , addItem]= useState(0);
    const handleIncrease = ()=> {
        addItem(counter +1);
    }
    return(
        <>
        <div>
          <h2> Shopping Cart</h2>
        <p> List of items:{counter} </p>
        <button onClick={handleIncrease}>Add</button>   
        </div>
        </>
    )


}

