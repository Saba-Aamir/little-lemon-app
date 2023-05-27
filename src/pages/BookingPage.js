import React, { useReducer } from 'react';
import BookingForm from "../components/BookingForm";

const BookingPage = () => {

    const initialTimes = ['Select date to view slots'];

    function timesReducer(times, action) {
        switch (action.type) {
          case 'updated': {
            return [
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00'
            ];
          }
          default: {
            throw Error('Unknown action: ' + action.type);
          }
        }
      }

    const [times, dispatch] = useReducer(timesReducer, initialTimes);

    function handleUpdateTimes(selectedDate) {
        dispatch({
            type: 'updated',
            selectedDate: selectedDate
        });
    }

    const handleSubmit = () => {
        console.log('Form Submitted!');
    };

    return (
        <main>
            <BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes} onSubmit={handleSubmit}/>
        </main>
    );
}

export default BookingPage;