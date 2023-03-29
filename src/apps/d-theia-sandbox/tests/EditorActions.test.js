import React from 'react';
import { shallow } from 'enzyme';
import EditorActions from './../src/components/Editor/EditorActions';

describe('EditorActions', () => {

  let wrapper = {};
  const chartProp = {};
  const handlers = {
    hnAddRow: jest.fn(),
    hnAddColumn: jest.fn(),
    hnReplaceChart: jest.fn()
  }

  beforeAll(() => {
    wrapper = shallow(<EditorActions oChart={chartProp} {...handlers}/>);
  });

  it('Called correct handler when row is added', () => {
    wrapper.find('.dt-btn-add-row').simulate('click');
    expect(handlers.hnAddRow).toBeCalled();
  });

  it('Called correct handler when column is added', () => {
    wrapper.find('.dt-btn-add-column').simulate('click');
    expect(handlers.hnAddColumn).toBeCalled();
  });

  it('Called correct handler when generating new or blank data', () => {
    wrapper.find('.dt-btn-clear').simulate('click');
    expect(handlers.hnReplaceChart).toBeCalled();
    wrapper.find('.dt-btn-randomise').simulate('click');
    expect(handlers.hnReplaceChart).toBeCalled();
  });

});
