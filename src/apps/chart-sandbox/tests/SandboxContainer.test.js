import React from 'react';
import { shallow } from 'enzyme';
import SandboxContainer from './../src/state/containers/SandboxContainer';
import store from './../src/state';

describe('SandboxContainer', () => {

  let wrapper = {};

  beforeAll(() => {
    wrapper = shallow(<SandboxContainer store={store} />);
  })

  it('Initialises with correct props', () => {
    const defaultProps = wrapper.props();
    expect(defaultProps.sState).toEqual('data');
    expect(defaultProps.oChart.aData.length).toEqual(8);
    expect(defaultProps.oChart.jConfig.sTitle).toEqual('Random Chart Data');
  });

});
