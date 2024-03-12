import { render } from '@testing-library/react';

import ClientRoutes from './client-routes';

describe('ClientRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
