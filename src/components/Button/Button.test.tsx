import { cleanup, render, screen } from "@testing-library/react"

import Button from "./Button"

describe('<Button/>', () => {
    afterEach(cleanup)

    test('Create a button with  params', () => {
        render(<Button name="Añadir Carrito" state={false}/>)
    })

    test('validate Name and classes', () => {
        render(<Button name="Añadir Carrito" state={false}/>)

        const getNameButton = screen.getByRole('button',{name:'Añadir Carrito'})

        expect(getNameButton).toBeInTheDocument()
    })
    test('validate classes related with state false', () => {
        render(<Button name="Añadir Carrito" state={false}/>)

        const getNameButton = screen.getByRole('button',{name:'Añadir Carrito'})
        expect(getNameButton).toHaveProperty('className','button button-state-dark')
    })
    test('validate classes related with state true', () => {
        render(<Button name="Añadir Carrito" state={true}/>)

        const getNameButton = screen.getByRole('button',{name:'Añadir Carrito'})
        expect(getNameButton).toHaveProperty('className','button button-state-light')
    })
})