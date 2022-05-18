import { render, screen, fireEvent  } from '@testing-library/react';
import Setting from '../components/Setting.js';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

test('should mark the first checkbox as unchecked', () => {
  global.navigator = {
    username: "m"
  }
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item1";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the first checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item1";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 2 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item2";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 2 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item2";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 3 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item3";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 3 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item3";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 4 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item4";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 4 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item4";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 5 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item5";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 5 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item5";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 6 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item6";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 6 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item6";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test('should mark the 7 checkbox as unchecked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item7";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    expect(checkbox.checked).toEqual(false)
  });

  test('should mark the 7 checkbox as checked', () => {
    render(<Router><Setting /></Router>);
    const CHECKBOX_ID = "item7";
    const checkbox = screen.getByTestId(CHECKBOX_ID)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });