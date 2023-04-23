import React from 'react'
import { shallow } from 'enzyme'
import DataRow from './../src/components/Editor/DataRow'

describe('DataRow', () => {
  let wrapper = {}
  const dataItem = {
    itemLabel: 'Item 1',
    itemValues: [46, 48],
  }
  const handlers = {
    hnChangeValue: jest.fn(),
    hnChangeLabel: jest.fn(),
    hnDeleteRow: jest.fn(),
  }
  let labelInput, valueInput1, valueInput2

  beforeAll(() => {
    wrapper = shallow(<DataRow dataItem={dataItem} iIndex={0} {...handlers} />)
    labelInput = wrapper.find('.dt-label-input')
    valueInput1 = wrapper.find('.dt-value-input').first()
    valueInput2 = wrapper.find('.dt-value-input').at(1)
  })

  it('Renders with the correct values in the inputs', () => {
    expect(labelInput.props().value).toEqual(dataItem.itemLabel)
    expect(parseInt(valueInput1.props().value)).toEqual(dataItem.itemValues[0])
    expect(parseInt(valueInput2.props().value)).toEqual(dataItem.itemValues[1])
  })

  it('Called correct handlers when inputs are changed', () => {
    labelInput.simulate('change', { target: { value: 'new label' } })
    expect(handlers.hnChangeLabel).toBeCalled()
    valueInput1.simulate('change', { target: { value: 25 } })
    expect(handlers.hnChangeValue).toBeCalled()
    valueInput2.simulate('change', { target: { value: 35 } })
    expect(handlers.hnChangeValue).toBeCalled()
  })

  it('Called correct handler when row is deleted', () => {
    wrapper.find('.dt-delete-row-btn').simulate('click')
    expect(handlers.hnDeleteRow).toBeCalledWith(0)
  })
})
