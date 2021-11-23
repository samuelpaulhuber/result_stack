import { render, screen } from '@testing-library/react';
import SearchBar from './index';

test('renders search bar container', () => {
  render(<SearchBar />);
  const element = screen.getAllByTestId('searchbar-container')[0];
  expect(element).toBeInTheDocument();
});
