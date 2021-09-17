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
} as ComponentMeta<typeof CustomLineChart>

const Template: ComponentStory<typeof CustomLineChart> = () => <CustomLineChart />

export const Default = Template.bind({})
