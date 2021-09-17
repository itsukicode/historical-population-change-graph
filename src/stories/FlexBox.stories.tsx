import { ComponentStory, ComponentMeta } from '@storybook/react'
/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { FlexBox } from 'components/layout/FlexBox'
import { CheckBoxGroup } from 'components/compositions/CheckBoxGroup'
import { CustomLineChart } from 'components/elements/CustomLineChart'
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
    <CustomLineChart />
  </FlexBox>
)
export const Default = Template.bind({})
