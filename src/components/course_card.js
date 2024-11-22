import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import config from '../constants';
import DOMPurify from 'dompurify';

export default function CourseCard({ title, image, file, description, id }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = (e) => {
        const raise = e.currentTarget.querySelector('.raise-box');
        const zoom = e.currentTarget.querySelector('.zoom-box');
        if (raise && zoom) {
            raise.classList.add('raise');
            zoom.classList.add('zoom');
        }
    };

    const handleMouseLeave = (e) => {
        const raise = e.currentTarget.querySelector('.raise-box');
        const zoom = e.currentTarget.querySelector('.zoom-box');
        if (raise && zoom) {
            raise.classList.remove('raise');
            zoom.classList.remove('zoom');
        }
    };

    const toggleDescription = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    // Sanitize description and forbid 'style' attributes
    const sanitizedDescription = DOMPurify.sanitize(description, {
        FORBID_ATTR: ['style'],  // Forbid 'style' attribute
        FORBID_TAGS: ['style']   // Forbid 'style' tags entirely
    });

    const truncatedDescription = sanitizedDescription.length > 100
        ? `${sanitizedDescription.substring(0, 100)}...`
        : sanitizedDescription;

    return (
        <Link to={`/courses/${id}`} className="no-underline text-inherit">
            <div className="flex relative flex-col m-4 gap-2 shadow-md" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                <div className="overflow-hidden"> 
                    <img className="zoom-box w-full aspect-square" src={`${config.REACT_APP_ASSET_URL}storage/${file}`} alt={`Course`} />
                </div>
                <div className="flex raise-box bg-white flex-col p-2 h-full">
                    <div className="flex flex-col items-center p-2 my-2 h-full">
                        <h3 className="text-lg">
                            {title}
                        </h3>
                        <p className="text-sm text-center text-gray-500" 
                           dangerouslySetInnerHTML={{ __html: isExpanded ? sanitizedDescription : truncatedDescription }}>
                        </p>
                        {description.length > 100 && (
                            <span className="text-blue-500 cursor-pointer ml-1" onClick={toggleDescription}>
                                {isExpanded ? 'See less' : 'See more'}
                            </span>
                        )}
                    </div>
                    <button className="bg-royal text-white self-center mb-5 px-5 py-3 rounded-full">
                        Details
                    </button>
                </div>
            </div>
        </Link>
    );
}
