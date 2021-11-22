import { render, screen } from '@testing-library/react';
import ViewMore from './index';

test('renders view more container', () => {
  render(<ViewMore />);
  const element = screen.getAllByTestId('view-more')[0];
  expect(element).toBeInTheDocument();
});
