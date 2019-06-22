import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from '../../../src/features/common/Navigation';

describe('common/Navigation', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Navigation {...props} />
    );

    expect(
      renderedComponent.find('.common-navigation').length
    ).toBe(1);
  });
});
