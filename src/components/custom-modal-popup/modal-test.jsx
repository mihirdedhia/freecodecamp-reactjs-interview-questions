import { useState } from "react"
import Modal from "./modal";



export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal
                    id={"Custom-id"}
                    onClose={onClose}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    body={<div>Customized body</div>}
                />
            }
        </div>
    )
}