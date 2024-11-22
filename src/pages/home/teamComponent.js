import React, { useEffect, useState } from 'react';
import config from '../../constants';
import axios from 'axios';

const TeamMember = ({ member }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full md:w-1/4 sm:w-1/2 px-4 mb-8">
      <div
        className="our-team bg-white rounded-lg shadow-md p-6 relative flex flex-col"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{ minHeight: '300px', minHeight: '500px' }} // You can adjust these values as needed
      >
        {showTooltip && (
          <div className="tooltip bg-gray-800 text-white rounded-md p-2 absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 opacity-95 w-60 h-32 overflow-y-auto">
            <p>{member.name}'s {member.about}</p> {/* Tooltip content */}
          </div>
        )}
        <div className="pic">
          <img
           src={member.avatar ? `${config.REACT_APP_ASSET_URL}storage/${member.avatar}` : 
           'https://image.lexica.art/full_webp/657616e7-8822-42cb-9acd-bec35b848a06'}
            className="w-full rounded-full" />
        </div>
        <h3 className="title text-xl font-semibold mt-4">{member.name}</h3>
        <span className="post text-sm">
          {member.roles && member.roles.length > 0 ? (
            member.roles.map((role, index) => (
              <span key={index}>{role.name}{index < member.roles.length - 1 ? ', ' : ''}</span>
            ))
          ) : (
            <span>No roles assigned</span>
          )}
        </span>
      </div>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch team members from the API
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`${config.REACT_APP_API_BASE_URL}teachers`); // Update the API endpoint as needed
        setTeamData(response.data); // Assuming the API returns an array of team members
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {teamData.length > 0 ? (
          teamData.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))
        ) : (
          <p>No team members available.</p>
        )}
      </div>
    </div>
  );
};

export default Team;
