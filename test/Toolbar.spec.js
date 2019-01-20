import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Toolbar from 'rbc-calendar-toolbar'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('`Toolbar`', () => {
  it('renders', () => {
    const a = render(<Toolbar date={new Date()} />)
  })
})
