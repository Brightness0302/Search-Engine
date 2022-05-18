import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react';
import Landing from '../components/Landing';
import { BrowserRouter as Router } from 'react-router-dom';

test('refresh link should be visible on the landing page', () => {
    const component = render(<Router><Landing /></Router>);
    const refreshEl = component.getByTestId("refreshLink");

    expect(refreshEl.textContent).toBe("Refresh");
});
