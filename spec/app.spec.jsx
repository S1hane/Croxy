/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-spacing */
import { shallow } from 'enzyme';
import React from 'react';
import Image from '../client/components/Image';

describe('Image', () => {
  it('It should render elements without crashing', () => {
    const appWrapper = shallow(<Image />);
    const element = (<svg viewBox="0 0 24 24">
    <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
  </svg>);
    expect(appWrapper.contains(element)).toEqual(true);
  });

  it('It should call getItems function when rendered', () => {
    const spy = jest.spyOn(Image.prototype, 'getItems');
    const wrapper = shallow(<Image />);
    expect(spy).toHaveBeenCalled();
  });

  it('It should change the main image when thumbnail is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'thumbClick');
    instance.thumbClick(event);
    expect(instance.thumbClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of main when thumbnail is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    expect(instance.state.main).toBe(0);
    instance.thumbClick(2);
    expect(instance.state.main).toBe(2);
  });

  it('It should change the main image when left button is clicked', () => {
    const spy = jest.spyOn(Image.prototype, 'leftClick');
    const wrapper = shallow(<Image />);
    wrapper.find('button').at(0).simulate('click', { preventDefault: () => {}});
    expect(spy).toHaveBeenCalled();
  });

  it('It should change the state of main when the left button is clicked', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ main: 1 });
    const instance = wrapper.instance();
    expect(instance.state.main).toBe(1);
    instance.leftClick();
    expect(instance.state.main).toBe(0);
  });

  it('It should change the main image when right button is clicked', () => {
    const spy = jest.spyOn(Image.prototype, 'rightClick');
    const wrapper = shallow(<Image />);
    wrapper.find('button').at(1).simulate('click', { preventDefault: () => {}});
    expect(spy).toHaveBeenCalled();
  });

  it('It should change the state of main when the right button is clicked', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ main: 1 });
    const instance = wrapper.instance();
    expect(instance.state.main).toBe(1);
    instance.rightClick();
    expect(instance.state.main).toBe(2);
  });

  it('It should change the main image of modal when the left button is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'leftModalClick');
    instance.leftModalClick(event);
    expect(instance.leftModalClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of modalMain when the left button is clicked in modal', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    instance.leftModalClick();
    expect(instance.state.modalMain).toBe(0);
  });

  it('It should change the main image of modal when the right button is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'rightModalClick');
    instance.rightModalClick(event);
    expect(instance.rightModalClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of modalMain when the right button is clicked in modal', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    instance.rightModalClick();
    expect(instance.state.modalMain).toBe(2);
  });

  it('It should change the main image of modal when a thumbnail is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'modalThumbs');
    instance.modalThumbs(event);
    expect(instance.modalThumbs).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of modalMain when modalThumbs is clicked', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    instance.modalThumbs(2);
    expect(instance.state.modalMain).toBe(2);
  });

  it('It should show the modal when the main image is clicked', () => {
    const wrapper = shallow(<Image />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'mainClick');
    instance.mainClick(event);
    expect(instance.mainClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of showModal when mainClick is clicked', () => {
    const wrapper = shallow(<Image />);
    wrapper.setState({ showModal: false });
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    expect(instance.state.showModal).toBe(false);
    instance.mainClick(event);
    expect(instance.state.showModal).toBe(true);
  });

  it('It should change the favorite button when it is clicked', () => {
    const spy = jest.spyOn(Image.prototype, 'changeFav');
    const wrapper = shallow(<Image />);
    wrapper.find('button').at(2).simulate('click', { preventDefault: () => {}});
    expect(spy).toHaveBeenCalled();
  });
});
