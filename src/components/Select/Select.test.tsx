import { render, screen } from '@testing-library/react';
import { Select } from './Select';

test('renders learn react link', () => {
  render(<Select label='Filter by accomodation type' />);
  const selectElement = screen.getByText(/Filter by accomodation type/i);
  expect(selectElement).toBeInTheDocument();
});
