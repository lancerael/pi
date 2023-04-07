import React from 'react'
import { shallow } from 'enzyme'
import DataTable from './../src/components/Editor/DataTable'

describe('DataTable', () => {
  let wrapper = {}
  const oChart = JSON.parse(
    '{"aData":[{"sLabel":"Item 1","aValues":[46]}],"jConfig":{"sTitle":"Random Chart Data","aAxisLabels":["Y Axis","X Axis"],"aValues":[{"sName":"Type 1","sColor":"#c8425c","oColor":{"r":200,"g":66,"b":92,"opacity":1},"iLabelWidth":51.015625}],"bTrim":true}}'
  )
  const handlers = {
    hnChangeLabel: jest.fn(),
    hnChangeValue: jest.fn(),
    hnDeleteRow: jest.fn(),
    hnDeleteColumn: jest.fn(),
    hnChangeType: jest.fn(),
    hnChangeColor: jest.fn(),
    hnSwitchTrim: jest.fn(),
  }
  let keyInput, colorInput

  beforeAll(() => {
    wrapper = shallow(<DataTable oChart={oChart} {...handlers} />)
    keyInput = wrapper.find('.dt-key-input')
    colorInput = wrapper.find('.dt-color-input')
  })

  it('Renders with the correct values in the inputs', () => {
    expect(keyInput.props().value).toEqual('Type 1')
    expect(colorInput.props().value).toEqual('#c8425c')
  })

  it('Called handlers when inputs are changed', () => {
    keyInput.simulate('change', { target: { value: 'new type' } })
    expect(handlers.hnChangeType).toBeCalled()
    colorInput.simulate('change', { target: { value: '#ffffff' } })
    expect(handlers.hnChangeColor).toBeCalled()
  })

  it('Called handler when column is deleted', () => {
    wrapper.find('.dt-delete-col-btn').simulate('click')
    expect(handlers.hnDeleteColumn).toBeCalledWith(0)
  })

  it('Called handler when trim is changed', () => {
    wrapper.find('.dt-trim').simulate('change')
    expect(handlers.hnSwitchTrim).toBeCalled()
  })
})
