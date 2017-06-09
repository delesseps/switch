/* eslint-disable no-undef */
import Switch from '../index';
import React from 'react';
import { mount } from 'enzyme';

describe('rc-switch', () => {
  let switcher;
  beforeEach(() => {
    switcher = mount(<Switch />);
  });

  it('initial checked state is false and changes to true on click', () => {
    expect(switcher.state().checked).toBe(false);
    switcher.simulate('click');
    expect(switcher.state().checked).toBe(true);
  });

  it('initial checked state is true and changes to false on click', () => {
    const wrapper = mount(<Switch defaultChecked/>);
    expect(wrapper.state().checked).toBe(true);
    wrapper.simulate('click');
    expect(wrapper.state().checked).toBe(false);
  });

  it('should support onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Switch onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toBeCalledWith(true);
    expect(onClick.mock.calls.length).toBe(1);
    wrapper.simulate('click');
    expect(onClick).toBeCalledWith(false);
    expect(onClick.mock.calls.length).toBe(2);
  });

  it('should not toggle when clicked in a disabled state', () => {
    const wrapper = mount(<Switch disabled defaultChecked/>);
    wrapper.simulate('click');
    expect(wrapper.state().checked).toBe(true);
  });
});
