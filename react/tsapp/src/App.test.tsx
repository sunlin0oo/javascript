import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './01-基本类型/06-类+接口';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
