import React from 'react';
import { mount } from 'enzyme';
import useLabelPrefix from '../src/index';

const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length;
const TestComp = () => {
  const prefixedLabel = useLabelPrefix('hello-prefix');
  return (
    <div>
      <label htmlFor={prefixedLabel}>
        Hello Prefix
      </label>
      <input id={prefixedLabel} type="text" />
    </div>
  );
};

describe('useLabelPrefix', () => {
  test('all id\'s are prefixed' , () => {
    const components = [...Array(100)].map(() => (
      mount(<TestComp />)
    ));

    const count = components.reduce((acc, component) => acc + component.find('#_hello-prefix').length || 0, 0);

    expect(count).toEqual(0);
  });
  test('generated id\'s should unique across multiple instances' , () => {
    const components = [...Array(100)].map(() => (
      mount(<TestComp />)
    ));

    const arr = components.map((component) => component.html());
    expect(isArrayUnique(arr)).toBeTruthy();
  });
});