import React, { useReducer } from 'react';
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {

  const navigate = useNavigate();

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };  

  function timesReducer(times, action) {
      switch (action.type) {
        case 'updated': {
          return fetchAPI(action.selectedDate);
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
    }

    const [times, dispatch] = useReducer(timesReducer, initializeTimes());

    function handleUpdateTimes(selectedDate) {
        dispatch({
            type: 'updated',
            selectedDate: selectedDate
        });
    }

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) {
          navigate('/success');
        }
    };

    return (
        <main>
            <BookingForm availableTimes={times} setAvailableTimes={handleUpdateTimes} submitForm={submitForm}/>
        </main>
    );
}

export default BookingPage;