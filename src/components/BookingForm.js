import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Button from './Button';

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guestNum, setGuestNum] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    
    // const handleSubmit = () => {
    //     console.log({
    //         resDate,
    //         resTime,
    //         guestNum,
    //         occasion
    //     }, 'Form Submitted!');
    // };

    return (
        <section className="form-section">
            <h1 className="form-heading">Reserve a Table</h1>
            <Formik initialValues={{}} onSubmit={onSubmit}>
                <Form className='form'>
                <label className='form-label' htmlFor="resDate">Choose Date</label>
                <Field className='form-field' id="resDate" type="date" value={resDate} onChange={e => { setResDate(e.target.value); setAvailableTimes(resDate); }} min={new Date().toJSON().slice(0, 10)}/>
        
                <label className='form-label' htmlFor="resTime">Choose Time</label>
                <Field className='form-field' as="select" id="resTime" value={resTime} onChange={e => setResTime(e.target.value)}>
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
                    <Button type="submit" text="Create Reservation" onClick={onSubmit} style={{width: '100%' }}/>
                </section>
                </Form>
            </Formik>
        </section>
    );
}

export default BookingForm;