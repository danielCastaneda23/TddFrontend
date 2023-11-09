import './Card.css'

import Button from '../Button/Button'
import Image from '../Image/Image'
import React from 'react'
import Typography from '../Typography/Typography'

interface Props {
    theme: Boolean
}
const Card: React.FC<Props> = ({ theme }) => {
    return (
        <section data-testid='section' className={`card ${!!theme ? 'card--state-light' : 'card--state-dark'}`}>
            <Image img={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} classes={'card--image'} />
            <Typography state={theme} classes={'card--text'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur distinctio molestiae animi voluptates repellat cumque, laboriosam saepe illum iusto dicta eveniet odio aliquid sapiente modi quos dolor at voluptatibus'}/>
            <Button name='Añadir Al Carrito' state={theme} />
        </section>
    )
}

export default Card