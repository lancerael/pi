import React from 'react'
import { shallow } from 'enzyme'
import ConfigEditor from './../src/components/Editor/ConfigEditor'

describe('ConfigEditor', () => {
  let wrapper = {}
  const props = { title: 'title', sAxisX: 'x', sAxisY: 'y' }
  const handlers = {
    hnChangeTitle: jest.fn(),
    hnChangeAxisX: jest.fn(),
    hnChangeAxisY: jest.fn(),
  }
  let titleInput, xInput, yInput

  beforeAll(() => {
    wrapper = shallow(<ConfigEditor {...props} {...handlers} />)
    titleInput = wrapper.find('.dt-editor-title-input')
    xInput = wrapper.find('.dt-editor-x-axis-input')
    yInput = wrapper.find('.dt-editor-y-axis-input')
  })

  it('Renders with the correct values in the inputs', () => {
    expect(titleInput.props().value).toEqual(props.title)
    expect(xInput.props().value).toEqual(props.sAxisX)
    expect(yInput.props().value).toEqual(props.sAxisY)
  })

  it('Called handlers when inputs are changed', () => {
    titleInput.simulate('change', { target: { value: 'new title' } })
    expect(handlers.hnChangeTitle).toBeCalled()
    xInput.simulate('change', { target: { value: 'new x' } })
    expect(handlers.hnChangeAxisX).toBeCalled()
    yInput.simulate('change', { target: { value: 'new y' } })
    expect(handlers.hnChangeAxisY).toBeCalled()
  })
})
