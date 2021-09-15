import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CustomLineChart, PopulationDataByPrefecture } from 'components/elements/CustomLineChart'

// 1980 - 2045 => point every 5 years
const data: PopulationDataByPrefecture[] = [
  {
    prefecture: '東京都', // Legend
    data: [
      // Year => X axis value, Value => Y axis value
      { year: 1985, value: 12817 },
      { year: 1990, value: 12707 },
      { year: 1995, value: 12571 },
      { year: 2000, value: 12199 },
    ],
  },
]

describe('CustomLineChart Component', () => {
  it('should render CustomLineChart component successfully', () => {
    render(<CustomLineChart data={data} />)
    expect(screen.getByTestId('LINECHART')).toBeInTheDocument()
  })
})
