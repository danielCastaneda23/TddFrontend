import React from 'react'

interface Props {
    img: string,
    classes: string
}
const Image: React.FC<Props> = ({ img, classes }) => {
    return (
        <img src={img} alt=':)' className={classes} />
    )
}

export default Image
