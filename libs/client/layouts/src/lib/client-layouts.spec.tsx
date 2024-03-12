import { render } from '@testing-library/react';

import ClientLayouts from './client-layouts';

describe('ClientLayouts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientLayouts />);
    expect(baseElement).toBeTruthy();
  });
});
