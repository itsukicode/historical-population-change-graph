import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from 'components/pages/App'
// ______________________________________________________
//
export default {
  title: 'pages/App',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: App,
  parameters: {
    docs: {
      description: {
        component: '全てのコンポーネントが組み合わさった最終的なアプリケーション',
      },
    },
  },
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => <App />

export const Default = Template.bind({})

Default.args = {}
