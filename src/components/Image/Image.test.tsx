import { cleanup, render, screen } from "@testing-library/react"

import Image from "./Image"

describe('<Image/>', () => {
    afterEach(cleanup)

    test('Create a Image with  params', () => {
        render(<Image img="test-img" classes='test-class'/>)
    })

    test('validate Name and classes', () => {
        render(<Image img="test-img" classes='test-class'/>)

        const getImage = screen.getByRole('img')

        expect(getImage).toBeInTheDocument()
        expect(getImage).toHaveProperty('className','test-class')
        expect(getImage).toHaveProperty('src','http://localhost/test-img')

    })
})