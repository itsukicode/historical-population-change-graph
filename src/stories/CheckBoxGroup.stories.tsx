import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckBoxGroup } from 'components/compositions/CheckBoxGroup'
// ______________________________________________________
//
export default {
  title: 'compositions/CheckBoxGroup',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: CheckBoxGroup,
  parameters: {
    docs: {
      description: {
        component: 'HeadingコンポーネントとCheckBoxListコンポーネントを組み合わせたコンポーネント',
      },
    },
  },
} as ComponentMeta<typeof CheckBoxGroup>

const Template: ComponentStory<typeof CheckBoxGroup> = () => <CheckBoxGroup />

export const CheckBoxGroup1 = Template.bind({})
CheckBoxGroup1.args = {}
