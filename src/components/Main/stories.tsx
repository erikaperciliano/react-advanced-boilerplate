import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Title Overwrite',
  Description: 'Description Overwrite'
}

export const Secondary: Story = (args) => <Main {...args} />
Secondary.args = {
  title: 'Title Secondary',
  Description: 'Description Secondary'
}

export const Default: Story = (args) => <Main {...args} />
