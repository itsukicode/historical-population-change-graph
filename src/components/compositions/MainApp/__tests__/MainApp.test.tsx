import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MainApp } from 'components/compositions/MainApp'

describe('MainApp Component', () => {
  it('should render MainApp component successfully', () => {
    render(<MainApp />)
  })
})
