import './Button.css'

import React from 'react'

interface Props {
    name: string,
    state: Boolean
}
const Button: React.FC<Props> = ({ name, state }) => {
    return (
        <button className={`button ${!state ? 'button-state-dark' : 'button-state-light'}`}>{name}</button>
    )
}

export default Button