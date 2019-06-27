// Test away!

import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Display from './Display'

afterEach(cleanup)


describe('Display.js', () => {
  it('it renders without errors', () => {
    render(<Display />)
  })

  it('it displays "Locked" if the `locked` prop is `true`', () => {
    const { getByText } = render(<Display locked={true} closed={false} />)
    getByText('Locked')
  })

  it('it displays "Unlocked" if the `locked` prop is `false`', () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    getByText('Unlocked')
  })

  it('when `locked` use the `red-led` class', () => {
    const { container } = render(<Display locked={true} closed={false} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(1)
  })

  it('when `closed` use the `red-led` class', () => {
    const { container } = render(<Display locked={false} closed={true} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(1)
  })

  it('when `locked` or `closed` use the `red-led` class', () => {
    const { container } = render(<Display locked={true} closed={true} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(2)
  })

  it('when `unlocked` use the `green-led` class', () => {
    const { container } = render(<Display locked={false} closed={true} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(1)
  })

  it('when `open` use the `green-led` class', () => {
    const { container } = render(<Display locked={true} closed={false} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(1)
  })

  it('when `unlocked` or `open` use the `green-led` class', () => {
    const { container } = render(<Display locked={false} closed={false} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(2)
  })
})