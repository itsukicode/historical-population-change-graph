import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBoxGroup } from 'components/compositions/CheckBoxGroup'

describe('CheckBoxGroup Component', () => {
  it('should render CheckBoxGroup component successfully', () => {
    render(<CheckBoxGroup />)
    expect(screen.getByTestId('CHECKBOXGROUP')).toBeInTheDocument()
  })
})
