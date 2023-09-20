import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a link', () => {
    render(<Home />)
 
    const link = screen.getByRole('link', {
      Name: /'Visit SRJS'/i,
    })
 
    expect(link).toBeInTheDocument()
  })
})