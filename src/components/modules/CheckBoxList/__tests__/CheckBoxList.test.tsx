import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBoxList } from 'components/modules/CheckBoxList'
import { MainAppContext } from 'components/compositions/MainApp'
import { mainAppContextValue } from 'components/utils/test'

describe('CheckBoxList Component', () => {
  it('should render CheckBoxList component successfully', () => {
    render(
      <MainAppContext.Provider value={mainAppContextValue}>
        <CheckBoxList />
      </MainAppContext.Provider>
    )
    const checkBoxListElement = screen.getByTestId('CHECKBOXLIST')
    expect(checkBoxListElement).toBeInTheDocument()
    expect(checkBoxListElement.querySelectorAll('li').length).toBe(47)
  })
})
