import React from 'react';
import {useSelector} from "react-redux";

const Modal = () => {
    const open = useSelector(state => state.modal.isOpen)
    console.log(open)
    if (!open) return <></>
    return (
        <aside className={"modal-container"}>
            <div className={"modal"}>
                <h4>Remove all items from your cart </h4>
                <div className={"btn-container"}>
                    <button type={"button"} className={"btn confirm-btn"}>CONFIRM</button>
                    <button type={"button"} className={"btn clear-btn"}>CANCEL</button>
                </div>
            </div>
        </aside>
    );
};

export default Modal;