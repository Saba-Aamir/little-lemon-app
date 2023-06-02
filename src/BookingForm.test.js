import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./utils/api";

test('Renders the BookingForm heading', () => {
    let times = ['10:00', '10:30'];
    const { getByText } = render(<BookingForm availableTimes={times}/>);
    const headingElement = getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('BookingForm should display the correct initial times', () => {
  const initialTimes = ['10:00', '10:30', '11:00', '11:30'];
  const { getByTestId } = render(<BookingForm availableTimes={initialTimes}/>);
  const displayTimes = getByTestId('time-slot-list');
  expect(displayTimes.children[0].textContent).toEqual(initialTimes[0]);
  expect(displayTimes.children[1].textContent).toEqual(initialTimes[1]);
  expect(displayTimes.children[2].textContent).toEqual(initialTimes[2]);
  expect(displayTimes.children[3].textContent).toEqual(initialTimes[3]);
});

test('BookingForm should display the updated times on date change', () => {
  let times = [];
  const initialLength = times.length;
  function handleUpdateTimes() {
    times = fetchAPI(new Date('12-12-23'));
  }
  const { getByTestId, getByLabelText, rerender } = render(<BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes}/>);
  const dateInput = getByLabelText(/Choose Date/);
  fireEvent.change(dateInput, {target: { value: '12-12-23' }});
  rerender(<BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes}/>);
  const updatedTimes = getByTestId('time-slot-list');
  expect(initialLength).not.toEqual(updatedTimes.children.length);
});

test('BookingForm should not submit if field values are invalid', () => {
  let times = ['10:00', '10:30'];
  function handleUpdateTimes() {
    times = fetchAPI(new Date('12-12-23'));
  }
  const submitForm = jest.fn();
  const { getByLabelText, getByRole } = render(<BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes} submitForm={submitForm}/>);
  const guestInput = getByLabelText(/Number of Guests/);
  fireEvent.change(guestInput, {target: { value: 0 }});
  const occasionInput = getByLabelText(/Select Occasion/);
  fireEvent.change(occasionInput, {target: { value: '' }});
  const submitBtn = getByRole('button');
  fireEvent.click(submitBtn);
  expect(submitForm).not.toHaveBeenCalled();
});

test('BookingForm should submit if field values are valid', () => {
  let times = ['10:00', '10:30'];
  function handleUpdateTimes() {
    times = fetchAPI(new Date('12-12-23'));
  }
  const submitForm = jest.fn();
  const { getByLabelText, getByTestId } = render(<BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes} submitForm={submitForm}/>);
  const dateInput = getByLabelText(/Choose Date/);
  fireEvent.change(dateInput, {target: { value: '12-12-23' }});
  const timeInput = getByLabelText(/Choose Time/);
  fireEvent.change(timeInput, {target: { value: '10:30' }});
  const guestInput = getByLabelText(/Number of Guests/);
  fireEvent.change(guestInput, {target: { value: 2 }});
  const occasionInput = getByLabelText(/Select Occasion/);
  fireEvent.change(occasionInput, {target: { value: 'Anniversary' }});
  const form = getByTestId('booking-form');
  fireEvent.submit(form);
  expect(submitForm).not.toHaveBeenCalled();
});