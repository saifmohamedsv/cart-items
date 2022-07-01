import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
    const {cartItems, count, total} = useSelector(state => state.cart)
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
                <h4>total <span>${total}</span></h4>
            </div>
            <button className={"btn clear-btn"}>
                Clear
            </button>
        </footer>
    </section>);
};

export default CartContainer;