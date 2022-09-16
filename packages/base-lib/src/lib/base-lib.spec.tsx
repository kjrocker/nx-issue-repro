import { render } from '@testing-library/react';

import BaseLib from './base-lib';

describe('BaseLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseLib />);
    expect(baseElement).toBeTruthy();
  });
});
