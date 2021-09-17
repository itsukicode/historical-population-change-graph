import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CustomLineChart, PopulationDataByPrefecture } from 'components/elements/CustomLineChart'
import { MainAppContext } from 'components/compositions/MainApp'

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
  {
    prefecture: '京都府',
    data: [
      { year: 1985, value: 7610 },
      { year: 1990, value: 3431 },
      { year: 2015, value: 9431 },
      { year: 2045, value: 1010 },
    ],
  },
]

const mainAppContextValue = {
  populationData,
  handleCheckedCheckBox,
  handleUncheckedCheckBox,
}

describe('CustomLineChart Component', () => {
  it('should render CustomLineChart component successfully', () => {
    render(
      <MainAppContext.Provider value={mainAppContextValue}>
        <CustomLineChart />)
      </MainAppContext.Provider>
    )
    expect(screen.getByTestId('LINECHART')).toBeInTheDocument()
  })
})
