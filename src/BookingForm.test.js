import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./utils/api";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
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