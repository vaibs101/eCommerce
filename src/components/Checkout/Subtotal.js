import React from 'react'
import "./Subtotal.css"
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../DataLayer/StateProvider';
import { getBasketTotal } from '../DataLayer/Reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    
    <div className='subtotal'>
     
      {/* <CurrencyFormat */}
        {/* renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length} items):<strong>${value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />This order contains a gift
                </small>
            </>

        )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
      /> */}
      <p>Subtotal ({basket.length} items):<strong>${getBasketTotal(basket)}</strong></p>
      <small className="subtotal_gift">
                    <input type="checkbox" />This order contains a gift
                </small>
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
