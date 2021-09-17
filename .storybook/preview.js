import { MainAppContext } from '../src/components/compositions/MainApp'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const populationData = [
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

const handleCheckedCheckBox = (prefCode, prefecture) => {}
const handleUncheckedCheckBox = (prefecture) => {}

const mainAppContextValue = {
  populationData,
  handleCheckedCheckBox,
  handleUncheckedCheckBox,
}

export const decorators = [
  (Story) => (
    <MainAppContext.Provider value={mainAppContextValue}>
      <Story />
    </MainAppContext.Provider>
  ),
]
