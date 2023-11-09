import { cleanup, render, screen } from "@testing-library/react"

import Typography from "./Typography"

describe('<Typography/>', () => {
    afterEach(cleanup)

    test('Create a paragraph component with  params', () => {
        render(<Typography classes="test-class" text="Texto para el parrafo" state={false}/>)
    })

    test('validate text params', () => {
        render(<Typography classes="test-class" text="Texto para el parrafo" state={false}/>)

        const getNameText = screen.getByText('Texto para el parrafo')

        expect(getNameText).toBeInTheDocument()
    })
    test('validate classes related with state false', () => {
        render(<Typography classes="test-class" text="Texto para el parrafo" state={false}/>)

        const getNameText = screen.getByText('Texto para el parrafo')
        expect(getNameText).toHaveProperty('className','test-class text-state-dark')
    })
    test('validate classes related with state true', () => {
        render(<Typography classes="test-class" text="Texto para el parrafo" state={true}/>)

        const getNameText = screen.getByText('Texto para el parrafo')
        expect(getNameText).toHaveProperty('className','test-class text-state-light')
    })
})