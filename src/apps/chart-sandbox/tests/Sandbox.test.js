import React from 'react'
import { shallow } from 'enzyme'
import Sandbox from './../src/components/Sandbox'

describe('Sandbox', () => {
  let wrapper = {}
  const chartProp = {}
  const handlers = {
    hnChangeLabel: jest.fn(),
    hnChangeValue: jest.fn(),
    hnAddRow: jest.fn(),
    hnDeleteRow: jest.fn(),
    hnAddColumn: jest.fn(),
    hnDeleteColumn: jest.fn(),
    hnChangeType: jest.fn(),
    hnChangeColor: jest.fn(),
    hnChangeTitle: jest.fn(),
    hnChangeAxisX: jest.fn(),
    hnChangeAxisY: jest.fn(),
    hnSwitchTrim: jest.fn(),
    hnReplaceChart: jest.fn(),
  }

  beforeAll(() => {
    wrapper = shallow(
      <Sandbox sState="data" oChart={chartProp} {...handlers} />
    )
  })

  it('Renders the editor with the correct props', () => {
    const { oChart, ...editorHandlers } = wrapper.find('Editor').props()
    expect(oChart).toBe(chartProp)
    expect(editorHandlers).toEqual(handlers)
  })

  it('Renders the bar chart with the correct props', () => {
    const { oChart, sState, sType, sId } = wrapper.find('Chart').first().props()
    expect(oChart).toBe(chartProp)
    expect(sState).toEqual('data')
    expect(sType).toEqual('bar')
    expect(sId).toEqual('container-bar-test')
  })

  it('Renders the line chart with the correct props', () => {
    const { oChart, sState, sType, sId } = wrapper.find('Chart').at(1).props()
    expect(oChart).toBe(chartProp)
    expect(sState).toEqual('data')
    expect(sType).toEqual('line')
    expect(sId).toEqual('container-line-test')
  })
})
