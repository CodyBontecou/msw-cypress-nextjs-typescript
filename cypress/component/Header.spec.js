import React from 'react'
import { mount } from '@cypress/react'
import Header from '@components/common/Header'

describe('Header', () => {
  it('renders Header component', () => {
    mount(<Header />)
  })
})
