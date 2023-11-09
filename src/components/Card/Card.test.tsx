import { cleanup, render, screen, within } from "@testing-library/react"

import Card from "./Card"

describe('<Card/>', () => {
    afterEach(cleanup)

    test('Create a Card with  params', () => {
        render(<Card theme={false}/>)
    })
    test('Card must have Image, Typography and Button Components inside of a section', () => {
        render(<Card theme={false}/>)

        const getSection = screen.getByTestId('section')
        const getButton = within(getSection).getByRole('button')
        const getText = within(getSection).getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur distinctio molestiae animi voluptates repellat cumque, laboriosam saepe illum iusto dicta eveniet odio aliquid sapiente modi quos dolor at voluptatibus')
        const getImage = within(getSection).getByRole('img')

        expect(getButton).toBeInTheDocument()
        expect(getText).toBeInTheDocument()
        expect(getImage).toBeInTheDocument()
        expect(getSection).toHaveProperty('className','card card--state-dark')

    })
})