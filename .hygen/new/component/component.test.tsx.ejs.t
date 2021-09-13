---
to: <%= abs_path %>/__tests__/<%= component_name %>.test.tsx
---
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import  { <%= component_name %> } from "components/<%= category %>/<%= component_name %>";

describe('<%= component_name %> Component', () => {
  it('should render <%= component_name %> component successfully', () => {
    render(<<%= component_name %>/>);
    expect(screen.getByTestId('/test/i')).toBeInTheDocument()
  })
})