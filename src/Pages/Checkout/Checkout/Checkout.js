import React from 'react';
import { Form } from 'react-bootstrap';
import './Checkout.css';

const Checkout = () => {

    return (
        <div className='container my-5 checkout-form'>
            <h2 className='section-title'>Checkout</h2>
            <p style={{ textAlign: "center" }}>Please fill the form for book!</p>
            <div>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" required />
                    </Form.Group>

                    <button className='submit-btn'>
                        <p style={{ margin: '0' }}>Submit</p>
                    </button>

                </Form>
            </div>
        </div >
    );
};

export default Checkout;