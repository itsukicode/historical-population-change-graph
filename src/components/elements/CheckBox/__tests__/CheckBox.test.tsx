import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CheckBox } from 'components/elements/CheckBox'
import { MainAppContext } from 'components/compositions/MainApp'
import { PopulationDataByPrefecture } from 'components/elements/CustomLineChart'

const handleCheckedCheckBox = jest.fn()
const handleUncheckedCheckBox = jest.fn()
const populationData: PopulationDataByPrefecture[] = [
  {
    prefecture: '東京都', // Legend
    data: [
      // Year => X axis value, Value => Y axis value
      { year: 1985, value: 2817 },
      { year: 1990, value: 2707 },
      { year: 2015, value: 2571 },
      { year: 2045, value: 2199 },
    ],
  },
]

const mainAppContextValue = {
  populationData,
  handleCheckedCheckBox,
  handleUncheckedCheckBox,
}

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
