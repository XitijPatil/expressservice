import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useCart} from "react-use-cart"
const Itemcard = (props) => {
    const {addItem}=useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
<<<<<<< HEAD
=======
                <img src='images/washbasin.jpg' class="card=img-top img-fluid"/>
>>>>>>> c4b40412e14c53f705022835cb069cffd238efca
                <div class="card-body text-center">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">INR {props.price}</h5>
                    <button class="btn btn-success"
                    onClick={()=>addItem(props.item)}
                    >Add to Cart</button>

                </div>
            </div>
            
        </div>
    )
}
export default Itemcard

