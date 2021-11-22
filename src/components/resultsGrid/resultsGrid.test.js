import { render, screen } from '@testing-library/react';
import ResultsGrid from './index';

test('renders results grid container', () => {
  render(<ResultsGrid />);
  const element = screen.getAllByTestId('results-grid')[0];
  expect(element).toBeInTheDocument();
});
