import { fireEvent, render, screen } from '@testing-library/react';



describe(("Form Submittion") , () => {
  const handleSubmit=jest.fn();
  render(<BookingForm onSubmit={handleSubmit}/>)

  const guests = screen.getByLabelText('/Number of guests:/');
  fireEvent.change(rangeInput, {target : {value : 200 }});

  const submitButton = screen.getAllByRole("button");
  expect(submitButton).toHaveAttribute("disabled");

});
