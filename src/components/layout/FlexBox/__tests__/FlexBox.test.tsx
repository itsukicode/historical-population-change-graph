import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FlexBox } from 'components/layout/FlexBox'

describe('FlexBox Component', () => {
  it('should render FlexBox component successfully', () => {
    render(
      <FlexBox>
        <h1>I am FlexBox! call me flex</h1>
      </FlexBox>
    )
    expect(screen.getByTestId('FLEXBOX')).toBeInTheDocument()
  })
})
