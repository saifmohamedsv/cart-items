import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "../redux/reducers/cartReducer";

const CartContainer = () => {

    const {cartItems, count, total} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    if (count < 1) return (<section className={"cart"}>
        <header>
            <h2>Your Bag</h2>
            <h4 className={"empty-cart"}>Empty Cart</h4>
        </header>
    </section>)

    return (<section className={"cart"}>
        <header>

            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map(item => (<CartItem key={item.id} {...item}/>))}
        </div>
        <footer>
            <hr/>
            <div className={"cart-total"}>
                <h4>total <span>${total.toFixed(2)}</span></h4>
            </div>
            <button onClick={() => dispatch(clearCart())} className={"btn clear-btn"}>
                Clear
            </button>
        </footer>
    </section>);
};

export default CartContainer;