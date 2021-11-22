import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main app container', () => {
  render(<App />);
  const element = screen.getAllByTestId('main-container')[0];
  expect(element).toBeInTheDocument();
});
