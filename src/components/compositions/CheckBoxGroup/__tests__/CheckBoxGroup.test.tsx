import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBoxGroup } from 'components/compositions/CheckBoxGroup'
import { MainAppContext } from 'components/compositions/MainApp'
import { mainAppContextValue } from 'components/utils/test'

describe('CheckBoxGroup Component', () => {
  it('should render CheckBoxGroup component successfully', () => {
    render(
      <MainAppContext.Provider value={mainAppContextValue}>
        <CheckBoxGroup />)
      </MainAppContext.Provider>
    )
    expect(screen.getByTestId('CHECKBOXGROUP')).toBeInTheDocument()
  })
})
