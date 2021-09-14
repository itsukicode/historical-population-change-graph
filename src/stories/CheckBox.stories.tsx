import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'
import { CheckBox } from 'components/elements/CheckBox'
// ______________________________________________________
//
export default {
  title: 'elements/CheckBox',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component:
          'ユーザーがクリックでき、クリック毎に色が変化し押されたか判断できるコンポーネント',
      },
    },
  },
  argTypes: {
    id: {
      name: 'id',
      description:
        'それぞれのチェックボックスが固有でもつID',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    prefecture: {
      name: 'prefecture',
      description: '47都道府県の内いづれかが入る',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '東京' },
      },
    },
    checked: {
      name: 'checked',
      description:
        'クリックされた時はtrue, されていない時はfalse',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (
  args
) => (
  <CheckBox
    id={args.id}
    prefecture={args.prefecture}
    checked={args.checked}
  />
)

export const CheckBox1 = Template.bind({})
CheckBox1.args = {
  id: 1,
  prefecture: '東京',
  checked: true,
}
