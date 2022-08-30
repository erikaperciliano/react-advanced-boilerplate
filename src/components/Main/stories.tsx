import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Testing1',
  description: 'Testing2'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Hello World!',
  description: 'Talk Dev!'
}
