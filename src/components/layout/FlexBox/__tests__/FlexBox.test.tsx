import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FlexBox } from 'components/layout/FlexBox'

describe('FlexBox Component', () => {
  it('should render FlexBox component successfully', () => {
    render(<FlexBox />)
    expect(screen.getByTestId('/test/i')).toBeInTheDocument()
  })
})
