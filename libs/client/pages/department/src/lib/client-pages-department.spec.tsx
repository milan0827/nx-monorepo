import { render } from '@testing-library/react';

import ClientPagesDepartment from './client-pages-department';

describe('ClientPagesDepartment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientPagesDepartment />);
    expect(baseElement).toBeTruthy();
  });
});
