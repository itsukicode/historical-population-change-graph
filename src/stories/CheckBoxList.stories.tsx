import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckBoxList } from 'components/modules/CheckBoxList'
// ______________________________________________________
//
export default {
  title: 'modules/CheckBoxList',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: CheckBoxList,
  parameters: {
    docs: {
      description: {
        component: '各都道府県のCheckBoxコンポーネントを展開するコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof CheckBoxList>

const Template: ComponentStory<typeof CheckBoxList> = () => <CheckBoxList />

export const Default = Template.bind({})
