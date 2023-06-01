import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ConfirmedBookingPage = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className="confirmed-booking-section">
                <h1 className='confirmed-booking-heading'>Booking Confirmed!</h1>
                <p className='confirmed-booking-text'>Your booking has been successfully created. Thank you for choosing Little Lemon Restaurant. We look forward to providing you with a wonderful dining experience. See you soon!</p>
                <section className='confirmed-booking-button'>
                    <Button text="Back to Home" onClick={() => navigate('/')}/>
                </section>
            </section>
        </main>
    );
}

export default ConfirmedBookingPage;