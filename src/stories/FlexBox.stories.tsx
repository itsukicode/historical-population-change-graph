import { ComponentStory, ComponentMeta } from '@storybook/react'
/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { FlexBox } from 'components/layout/FlexBox'
import { CheckBoxGroup } from 'components/compositions/CheckBoxGroup'
import { CustomLineChart, PopulationDataByPrefecture } from 'components/elements/CustomLineChart'

// ______________________________________________________
//
export default {
  title: 'layout/FlexBox',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: FlexBox,
  parameters: {
    docs: {
      description: {
        component: 'Flexbox コンポーネント',
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'SP時(1024px未満)に縦並び、PC版時(1024px以上)に横並びにしたいコンポーネント郡',
      table: {
        type: { summary: ' React.ReactNode' },
        defaultValue: { summary: '' },
      },
    },
  },
} as ComponentMeta<typeof FlexBox>

const spacing = css`
  height: 30px;
  @media (min-width: 768px) {
    width: 30px;
  }
  @media (min-width: 1024px) {
    width: 50px;
  }
`

const Template: ComponentStory<typeof FlexBox> = () => (
  <FlexBox>
    <CheckBoxGroup />
    <div css={spacing} />
    <CustomLineChart data={data} />
  </FlexBox>
)

export const FlexBox1 = Template.bind({})
const data: PopulationDataByPrefecture[] = [
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
  {
    prefecture: '大阪府',
    data: [
      { year: 1985, value: 6610 },
      { year: 1990, value: 2431 },
      { year: 2015, value: 1431 },
      { year: 2045, value: 4010 },
    ],
  },
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
  {
    prefecture: '大阪府',
    data: [
      { year: 1985, value: 6610 },
      { year: 1990, value: 2431 },
      { year: 2015, value: 1431 },
      { year: 2045, value: 4010 },
    ],
  },
  {
    prefecture: '大阪府',
    data: [
      { year: 1985, value: 6610 },
      { year: 1990, value: 2431 },
      { year: 2015, value: 1431 },
      { year: 2045, value: 4010 },
    ],
  },
]
