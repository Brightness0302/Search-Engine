import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Navbar  from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


test('on initial render, the navbar renders with the correct texts', () => {
    const component = render(<Router> <Navbar /> </Router>);
    const headerEl = component.getByTestId("group-name");
    const homeEl = component.getByTestId("homeEl");
    const settingsEl = component.getByTestId("settingsEl");
    
    expect(headerEl.textContent).toBe("Donut");
    expect(homeEl.textContent).toBe("Home");
    expect(settingsEl.textContent).toBe("Settings");

});

test("Ensurelogin button is visible on navbar", () => {
    const component = render(<Router> <Navbar /> </Router>);
    const loginBtnEl = component.getByTestId("loginBtn");

    expect(loginBtnEl.textContent).toBe(" Log in ");
});
