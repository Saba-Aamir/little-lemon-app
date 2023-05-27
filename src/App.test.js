import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('BookingForm to be submitted if date, time, guests and occasion selected', () => {
  const date = '30-05-23';
  const time = '17:00';
  const guests = '2';
  const occasion = 'Birthday';

  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit}/>);

  const dateInput = screen.getByLabelText(/Choose Date/);
  fireEvent.change(dateInput, { target: { value: date } });

  const timeInput = screen.getByLabelText(/Choose Time/);
  fireEvent.change(timeInput, {target: { value: time }});

  const guestInput = screen.getByLabelText(/Number of Guests/);
  fireEvent.change(guestInput, {target: { value: guests }});

  const occasionInput = screen.getByLabelText(/Select Occasion/);
  fireEvent.change(occasionInput, {target: { value: occasion }});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
})
