

import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../src/App.css';
import star from '../../../src/assets/images/start.png';  
import config from '../../constants';
import axios from 'axios';
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        680: {
            items: 2,
            loop: false
        },
        1000: {
            items: 3
        }
    }
};
 
const TestimonialsCarousel = () => { 
     const [testimonials, setTestimonials] = useState([]);
     useEffect(() => {  
      const fetchTestimonials = async () => {
          try {
              const response = await axios.get(`${config.REACT_APP_API_BASE_URL}testimonials`);  
              const approvedTestimonials = response.data.filter(testimonial => testimonial.approved === 1);
              setTestimonials(approvedTestimonials);
          } catch (error) {
              console.error('Error fetching testimonials:', error);
          }
      }; 
      fetchTestimonials();
      }, []); 
      return (
        <div className="gtco-testimonials">
        <OwlCarousel className="owl-theme" {...options}>
            {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                            
                                src={testimonial.file ? `${config.REACT_APP_ASSET_URL}storage/${testimonial.file}` : 'https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png'}
                                alt="Profile"
                            />
                            <div className="card-body">
                                <h5>{testimonial.name}</h5>
                                <p className="card-text">{testimonial.message}</p>
                                <div className="star-ratings">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No testimonials available.</p>
            )}
        </OwlCarousel>
    </div>
    );
};

const renderStars = (rating) => {
  
  const stars = [];
  const starStyle = {
      display: 'inline-block',
      width: '25px', // Adjust width as needed
      height: '25px', // Adjust height as needed
      marginRight: '5px' // Add spacing between stars
  };
  for (let i = 1; i <= rating; i++) {
      stars.push(
          <img
              key={i}
              src={star}
              style={starStyle}
              alt="star"
              className={i <= rating ? 'filled-star' : 'empty-star'} // Optionally add a class to style filled vs empty stars
          />
      );
  }
  return stars;
};

export default TestimonialsCarousel;


