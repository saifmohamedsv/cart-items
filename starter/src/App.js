import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotals} from "./redux/reducers/cartReducer";
import Modal from "./components/Modal";

function App() {
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateTotals())
    }, [cartItems, dispatch])

    return (
        <main>
            <Modal/>
            <Navbar/>
            <CartContainer/>
        </main>
    );
}

export default App;
