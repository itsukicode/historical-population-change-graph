import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading } from 'components/elements/Heading'
// ______________________________________________________
//
export default {
  title: 'elements/Heading',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'h1~h2の見出しのコンポーネント一覧',
      },
    },
  },
  argTypes: {
    type: {
      name: 'type',
      description: 'テキストのサイズ',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'h1' },
      },
    },
    children: {
      name: 'children',
      description: 'テキスト',
      table: {
        defaultValue: {
          summary: '都道府県別の総人口推移グラフ',
        },
      },
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading type={args.type}>{args.children}</Heading>
)
export const H1Heading = Template.bind({})
H1Heading.args = {
  type: 'h1',
  children: '都道府県別の総人口推移グラフ',
}

export const H2Heading = Template.bind({})
H2Heading.args = {
  type: 'h2',
  children: '都道府県',
}
