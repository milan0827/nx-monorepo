import { render } from '@testing-library/react';

import ClientPagesAttendance from './client-pages-attendance';

describe('ClientPagesAttendance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientPagesAttendance />);
    expect(baseElement).toBeTruthy();
  });
});
