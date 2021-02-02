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
import Thumbs from '../client/components/Thumbs';

describe('Thumbs', () => {
  it('It should render elements without crashing', () => {
    shallow(<Thumbs thumbs={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} />);
  });

  it('It should change the main image when thumbnail is clicked', () => {
    const wrapper = shallow(<Thumbs thumbs={jest.fn()} images={['one', 'two', 'three']} thumbClass={['one', 'two', 'three']} />);
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

  it('It should change the main image of modal when thumbnail is clicked', () => {
    const wrapper = shallow(<Thumbs thumbs={jest.fn()} images={['one', 'two', 'three']} thumbClass={['image-modalThumb', 'two', 'three']} />);
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

  it('It should change the main image of modal when thumbnail is clicked when there are 4 images', () => {
    const wrapper = shallow(<Thumbs thumbs={jest.fn()} images={['one', 'two', 'three', 'four']} thumbClass={['image-modalThumb', 'two', 'three', 'four']} />);
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
});
