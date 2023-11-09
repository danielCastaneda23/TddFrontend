import './Typography.css'

import React from 'react'
interface Props {
    state: Boolean
    classes:string,
    text:string
}
const Typography: React.FC<Props> = ({ state,classes,text }) => {
    return (
        <p className={`${classes} ${!!state ? 'text-state-light' : 'text-state-dark'}`}>{text}</p>)
}

export default Typography