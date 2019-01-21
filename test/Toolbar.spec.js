import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from '../src/Toolbar'

describe('`Toolbar`', () => {
  it('is defined', () => {
    const component = shallow(<Toolbar date={new Date()} />)
    expect(component).toBeDefined()
  })
})
