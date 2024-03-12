import { render } from '@testing-library/react';

import ClientUtils from './client-utils';

describe('ClientUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientUtils />);
    expect(baseElement).toBeTruthy();
  });
});
