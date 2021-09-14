import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBox } from 'components/elements/CheckBox'

describe('CheckBox Component', () => {
  it('should render and be clickable the CheckBox component', () => {
    render(<CheckBox id={1} prefecture="北海道" checked={false} />)
    const checkbox = screen.getByTestId('checkbox-1') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  })
})
