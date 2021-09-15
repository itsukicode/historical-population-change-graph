import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CustomLineChart } from 'components/elements/CustomLineChart'
// ______________________________________________________
//
export default {
  title: 'elements/CustomLineChart',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: CustomLineChart,
  parameters: {
    docs: {
      description: {
        component:
          '受け取ったデータ(各都道府県の毎５年ごと(1980〜2045年)の人口構成のデータ)をチャートとして表示させるコンポーネント',
      },
    },
  },
  argTypes: {
    data: {
      name: 'data',
      description: '各都道府県の毎５年ごと(1980〜2045年)の人口構成のデータ',
      table: {
        // defaultValue: { summary: data },
      },
    },
  },
} as ComponentMeta<typeof CustomLineChart>

const Template: ComponentStory<typeof CustomLineChart> = (args) => (
  <CustomLineChart data={args.data} />
)

export const LineChart = Template.bind({})
LineChart.args = {
  data: [
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
  ],
}
