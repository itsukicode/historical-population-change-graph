---
to: src/stories/<%= component_name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react'
import  { <%= component_name %> } from "components/<%= category %>/<%= component_name %>";
// ______________________________________________________
//
export default {
  title: '<%= category %>/<%= component_name %>' ,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: <%= component_name %>,
  parameters: {
    docs: {
      description: {
        component: 'ここにコンポーネントについての説明を記述する',
      },
    },
  },
  <% if (have_props) { -%>
  argTypes: {
      type: {
        name: 'type',
        description: 'type について説明を書く',
        control: {
          type: 'select',
          options: ['sm', 'md', 'lg'],
        },
        table: {
          type: { summary: 'select' },
          defaultValue: { summary: 'md' },
        },
      },
      children: {
        name: 'children',
        description: '文字型がはいる',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'text something here' },
        },
      },
      noMargin: {
        name: 'noMargin',
        description:  '下にマージンがつくかつかいないか',
      },
    },
<% } -%>
} as ComponentMeta<typeof <%= component_name %>>

const Template: ComponentStory<typeof <%= component_name %>> = () => <<%= component_name %> {} />

export const Default = Template.bind({})
Default.args = {
  <% if (have_props) { -%>
  children: 'text something here',
  <% } -%>
}