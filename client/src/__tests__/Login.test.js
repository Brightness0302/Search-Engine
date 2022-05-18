import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react';
import Login from '../components/Login';
import { BrowserRouter as Router } from 'react-router-dom';

test('value of input elements is null initially', () => {
    const component = render(<Router><Login /></Router>);
    const usernameIn = component.getByTestId("usernameEl");
    const passwordIn = component.getByTestId("passwordEl");

    expect(usernameIn.value).toBe("");
    expect(passwordIn.value).toBe("");
});


test("change value of input elements works correctly", () => {
    const component = render(<Router><Login /></Router>);
    const usernameIn = component.getByTestId("usernameEl");
    const passwordIn = component.getByTestId("passwordEl");

    fireEvent.change(usernameIn, {
        target: {
            value: "pe2@njit.edu"
        }
    });

    fireEvent.change(passwordIn, {
        target: {
            value: "njit123@#"
        }
    });
    expect(passwordIn.value).toBe("njit123@#");
});

test("ensure login btn and sign up link is present", () => {
    const component = render(<Router><Login /></Router>);
    const loginEl = component.getByTestId("loginEl");
    const signUpEl = component.getByTestId("signUpEl");

    expect(loginEl.value).toBe("Login");
    //expect(signUpEl.textContent).toBe("Sign Up");
});