import React from 'react'
import "../../../index.css"

const ButtonItem = ({ buttonName, onClick }) => {
    return (
        <button
            //className="btn-small waves-effect waves-light"
            className="buttons waves-effect waves-light blue"
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}

export default ButtonItem