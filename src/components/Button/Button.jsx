import React from 'react'

const Button = ({ buttonClass, clickHandler, text }) => (

    <button className={buttonClass} onClick={() => clickHandler ? clickHandler.call(null, text) : null}>
        <span className="title">{text}</span>
    </button>
)

export default Button;