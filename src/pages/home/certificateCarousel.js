import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../src/App.css';

// Assuming you have an array of certificate images
const certificateImages = [
    'certificate.jpeg',
    'certificate.jpeg',
    'certificate.jpeg',
    // Add more certificate image paths as needed
];

const options = {
    loop: true,
    items: 1, // Display one item at a time
    margin: 0,
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     680: {
    //         items: 1
    //     },
    //     1000: {
    //         items: 1
    //     },
    //     1250: {
    //         items: 1
    //     }
    // }
};
// style={{height:'70vh',width:'50vw'}} 
const CertificateCarousel = () => {
    return (
        
        
            <OwlCarousel className="owl-theme" {...options}>
                {certificateImages.map((certificate, index) => (
                    <div key={index} className="owl-themes">
                        <img src={require(`../../../src/assets/images/${certificate}`)} alt={`Certificate ${index}`}  />
                    </div>
                ))}
            </OwlCarousel>
    
        
    );
};

export default CertificateCarousel;
