import { StoryFn } from '@storybook/addons'
import React from 'react'
import GlobalStyles from '../src/styles/global'

//story = our story
const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
