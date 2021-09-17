import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CustomLineChart } from 'components/elements/CustomLineChart'
import { MainAppContext } from 'components/compositions/MainApp'
import { mainAppContextValue } from 'components/utils/test'

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
