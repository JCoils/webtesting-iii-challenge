// Test away!

import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Controls from './Controls'


afterEach(cleanup)


describe('Controls.js', () => {
  it('it renders without errors', () => {
    render(<Controls />)
  })

  it('it cannot be closed if it is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={false} />)
    const btn_close = getByText('Close Gate')
    expect(btn_close.disabled).toBeTruthy()
  })

  it('it cannot be opened if it is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    const btn_open = getByText('Open Gate')
    expect(btn_open.disabled).toBeTruthy()
  })
})