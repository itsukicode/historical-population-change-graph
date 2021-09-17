import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBox } from 'components/elements/CheckBox'
import { MainAppContext } from 'components/compositions/MainApp'
import { mainAppContextValue } from 'components/utils/test'

describe('CheckBox Component', () => {
  it('should render and be clickable the CheckBox component', () => {
    render(
      <MainAppContext.Provider value={mainAppContextValue}>
        <CheckBox id={1} prefecture="北海道" checked={false} />
      </MainAppContext.Provider>
    )
    const checkbox = screen.getByTestId('checkbox-1') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    setTimeout(() => {
      expect(checkbox.checked).toEqual(true)
    }, 300)
  })
})
