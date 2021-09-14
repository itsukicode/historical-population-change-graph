import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Heading } from 'components/elements/Heading'

describe('Heading Component', () => {
  it('should render <h1> Heading component successfully', () => {
    render(<Heading type="h1">都道府県別の総人口推移グラフ</Heading>)
    expect(screen.getByText('都道府県別の総人口推移グラフ')).toBeInTheDocument()
  })
  it('should render <h2> Heading component successfully', () => {
    render(<Heading type="h2">都道府県</Heading>)
    expect(screen.getByText('都道府県')).toBeInTheDocument()
  })
})
