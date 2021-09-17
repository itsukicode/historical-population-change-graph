import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainApp } from 'components/compositions/MainApp'
// ______________________________________________________
//
export default {
  title: 'compositions/MainApp',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: MainApp,
  parameters: {
    docs: {
      description: {
        component:
          'CustomLineChart+CheckBoxGroup+FlexBoxを用いた今回のプログラムの根幹。全ての状態管理はこのコンポーネントが担います。',
      },
    },
  },
} as ComponentMeta<typeof MainApp>

const Template: ComponentStory<typeof MainApp> = () => <MainApp />

export const Default = Template.bind({})
Default.args = {}
