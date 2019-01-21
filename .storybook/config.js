import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import Decorator from '../stories/Calendar.decorator'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => <Decorator story={story} />)

configure(loadStories, module)
