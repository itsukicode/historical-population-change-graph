import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { App } from 'components/pages/App'

describe('App Component', () => {
  it('should render App component successfully', () => {
    render(<App />)
    expect(screen.getByText(/Enjoy this Project!/i)).toBeInTheDocument()
  })
})
