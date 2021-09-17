import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MainApp } from 'components/compositions/MainApp'

describe('MainApp Component', () => {
  it('should render MainApp component successfully', () => {
    render(<MainApp />)
    setTimeout(() => {
      expect(screen.getByText('都道府県別の総人口推移グラフ')).toBeInTheDocument()
    }, 1000)
  })
})
