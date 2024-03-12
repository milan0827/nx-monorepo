import { render } from '@testing-library/react';

import ClientTypes from './client-types';

describe('ClientTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientTypes />);
    expect(baseElement).toBeTruthy();
  });
});
