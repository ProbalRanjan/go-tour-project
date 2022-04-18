import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='container my-5'>
            <h2 className='section-title'>Testimonial</h2>
            <div className="testimonial-container">
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;