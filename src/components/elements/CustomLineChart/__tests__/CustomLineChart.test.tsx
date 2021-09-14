import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
  CustomLineChart,
  PopulationDataByPrefecture,
} from 'components/elements/CustomLineChart'

// 1980 - 2045 => point every 5 years
export const data: PopulationDataByPrefecture[] = [
  {
    prefecture: '東京', // Legend
    data: [
      // Year => X axis value, Value => Y axis value
      { year: '1985', value: '12817' },
      { year: '1990', value: '12707' },
      { year: '1995', value: '12571' },
      { year: '2000', value: '12199' },
    ],
  },
  {
    prefecture: '京都',
    data: [
      { year: '1985', value: '7610' },
      { year: '1990', value: '8431' },
      { year: '1995', value: '9431' },
      { year: '2000', value: '10610' },
    ],
  },
]

describe('CustomLineChart Component', () => {
  it('should render CustomLineChart component successfully', () => {
    render(<CustomLineChart data={data} />)
    expect(screen.getByTestId('/test/i')).toBeInTheDocument()
  })
})
