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
import { shallow, mount } from 'enzyme';
import React from 'react';
import Image from '../client/components/Image';
import Modal from '../client/components/Modal';

describe('Modal', () => {
  it('It should render elements without crashing', () => {
    const appWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const element = (<svg viewBox="0 0 24 24">
    <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
  </svg>);
    expect(appWrapper.contains(element)).toEqual(true);
  });

  it('It should close modal when close button is clicked', () => {
    const wrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'onClose');
    instance.onClose(event);
    expect(instance.onClose).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of showModal when onClose is clicked', () => {
    const wrapper = mount(<Image />);
    wrapper.setState({ showModal: true, main: 1 });
    const instance = wrapper.instance();
    const modalWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const modalInstance = modalWrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    expect(instance.state.showModal).toBe(true);
    jest.spyOn(modalInstance, 'onClose');
    modalInstance.onClose(event);
    expect(modalInstance.onClose).toHaveBeenCalledTimes(1);
    instance.mainClick(event);
    expect(instance.state.showModal).toBe(false);
  });

  it('It should change the main image in the modal when the thumbnail is clicked', () => {
    const wrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
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

  it('It should change the state of modalMain when thumbClick is clicked', () => {
    const wrapper = mount(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    const modalWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const modalInstance = modalWrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    jest.spyOn(modalInstance, 'thumbClick');
    modalInstance.thumbClick(2);
    expect(modalInstance.thumbClick).toHaveBeenCalledTimes(1);
    instance.modalThumbs(2);
    expect(instance.state.modalMain).toBe(2);
  });

  it('It should change the main image in the modal when the left button is clicked', () => {
    const wrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'leftClick');
    instance.leftClick(event);
    expect(instance.leftClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of modalMain when leftClick is clicked', () => {
    const wrapper = mount(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    const modalWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const modalInstance = modalWrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    jest.spyOn(modalInstance, 'leftClick');
    modalInstance.leftClick();
    expect(modalInstance.leftClick).toHaveBeenCalledTimes(1);
    instance.leftModalClick();
    expect(instance.state.modalMain).toBe(0);
  });

  it('It should change the main image in the modal when the right button is clicked', () => {
    const wrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'rightClick');
    instance.rightClick(event);
    expect(instance.rightClick).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of modalMain when rightClick is clicked', () => {
    const wrapper = mount(<Image />);
    wrapper.setState({ modalMain: 1 });
    const instance = wrapper.instance();
    const modalWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const modalInstance = modalWrapper.instance();
    expect(instance.state.modalMain).toBe(1);
    jest.spyOn(modalInstance, 'rightClick');
    modalInstance.rightClick();
    expect(modalInstance.rightClick).toHaveBeenCalledTimes(1);
    instance.rightModalClick();
    expect(instance.state.modalMain).toBe(2);
  });

  it('It should zoom image when image is clicked', () => {
    const wrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: '',
      },
      preventDefault: jest.fn()
    };
    jest.spyOn(instance, 'zoom');
    instance.zoom(event);
    expect(instance.zoom).toHaveBeenCalledTimes(1);
  });

  it('It should change the state of showZoomModal when zoom is clicked', () => {
    const modalWrapper = shallow(<Modal modalThumbs={jest.fn()} onClose={jest.fn()} right={jest.fn()} left={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} main={0} showModal />);
    modalWrapper.setState({ showZoomModal: false });
    const modalInstance = modalWrapper.instance();
    modalInstance.zoom();
    expect(modalInstance.state.showZoomModal).toBe(true);
  });
});
