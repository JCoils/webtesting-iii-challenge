// Test away


import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Dashboard from './Dashboard'


afterEach(cleanup)


describe('Dashboard.js', () => {
  test('it renders without errors', () => {
    render(<Dashboard />)
  })

  test('it shows the controls and display', () => {
    const { container } = render(<Dashboard />)
    const controls = container.getElementsByClassName('controls')
    const display = container.getElementsByClassName('display')

    expect(controls.length).toBe(1)
    expect(display.length).toBe(1)
  })

  describe('<Display />', () => {
    test('it defaults to `unlocked` and `open`', () => {
      const { container, getByText } = render(<Dashboard />)
      getByText(/Unlocked/)
      getByText(/Open/)
    })
  })
})