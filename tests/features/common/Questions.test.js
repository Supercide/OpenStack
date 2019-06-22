import React from 'react';
import { shallow } from 'enzyme';
import { Questions } from '../../../src/features/common/Questions';

describe('common/Questions', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Questions {...props} />
    );

    expect(
      renderedComponent.find('.common-questions').length
    ).toBe(1);
  });
});
