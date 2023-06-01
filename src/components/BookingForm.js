import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Button from './Button';

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
    const [resDate, setResDate] = useState(new Date().toJSON().slice(0, 10));
    const [resTime, setResTime] = useState('');
    const [guestNum, setGuestNum] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');

    const handleSubmit = () => {
        const formData = {
            'resDate': resDate,
            'resTime': resTime,
            'guestNum': guestNum,
            'occasion': occasion
        };
        submitForm(formData);
    };

    return (
        <section className="form-section">
            <h1 className="form-heading">Reserve a Table</h1>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form className='form'>
                <label className='form-label' htmlFor="resDate">Choose Date</label>
                <Field className='form-field' id="resDate" type="date" value={resDate} onChange={e => { setResDate(e.target.value); setAvailableTimes(new Date(e.target.value)); }} min={new Date().toJSON().slice(0, 10)}/>
        
                <label className='form-label' htmlFor="resTime">Choose Time</label>
                <Field className='form-field' as="select" id="resTime" value={resTime} onChange={e => setResTime(e.target.value)} data-testid="time-slot-list">
                    {availableTimes && availableTimes.map((timeSlot => <option key={timeSlot} value={timeSlot}>{timeSlot}</option>))}
                </Field>

                <label className='form-label' htmlFor="guestNum">Number of Guests</label>
                <Field className='form-field' as="input" type="number" id="guestNum" min="1" max="10" value={guestNum} onChange={e => setGuestNum(e.target.value)}/>
                
                <label className='form-label' htmlFor="occasion">Select Occasion</label>
                <Field className='form-field' as="select" id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </Field>

                <section className='form-button'>
                    <Button type="submit" text="Create Reservation" style={{width: '100%' }}/>
                </section>
                </Form>
            </Formik>
        </section>
    );
}

export default BookingForm;