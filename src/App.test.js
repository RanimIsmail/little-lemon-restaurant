import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import Reservations from './Pages/Reservations';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Table");
  expect(headingElement).toBeInTheDocument();
})

test('Renders the Reservations initialaizeTimes', () => {
  render(<Reservations />);
  const initialaizeElement = screen.getByText("Book Table");
  expect(headingElement).toBeInTheDocument();
})
