"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Define the team member data
const managementTeam = [
  { name: 'Jay Ruffner', title: 'Chairman and CEO', image: 'avatar.svg' },
  { name: 'Isaac Vaughn', title: 'VP, Business Operations', image: 'avatar.svg' },
  { name: 'Lisa Brown', title: 'VP, Product', image: 'avatar.svg' },
];

const boardMembers = [
  { name: 'Shawn Witter', title: 'Chief Financial Officer', image: 'avatar.svg' },
  { name: 'Kevin Moranca', title: 'Chief Marketing Officer', image: 'avatar.svg' },
  { name: 'Tracy Cole', title: 'Digital Products Officer', image: 'avatar.svg' },
];

const advisors = [
  { name: 'Sachin Daw', title: 'VP, Engineering', image: 'avatar.svg' },
  { name: 'Jeff Heard', title: 'U.S. Sales and Alliances', image: 'avatar.svg' },
  { name: 'Michael Arkin', title: 'Investor, Gunnar Capital', image: 'avatar.svg' },
];

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState('management');

  return (
    <div className="flex py-20 flex-col md:flex-row justify-center ">
      {/* Left-side menu */}
      <div className="bg-gray-100 p-4 md:w-1/4 md:h-auto">
        <h2 className="text-2xl font-bold mb-4">The Zenefits team</h2>
        <ul>
          <li
            className={`cursor-pointer px-2 py-1 rounded ${
              activeTeam === 'management' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => setActiveTeam('management')}
          >
            Management
          </li>
          <li
            className={`cursor-pointer px-2 py-1 rounded ${
              activeTeam === 'board' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => setActiveTeam('board')}
          >
            Board
          </li>
          <li
            className={`cursor-pointer px-2 py-1 rounded ${
              activeTeam === 'advisors' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => setActiveTeam('advisors')}
          >
            Advisors
          </li>
        </ul>
      </div>

      {/* Team member cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8">
        {activeTeam === 'management' &&
          managementTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-auto md:h-52"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={`/${member.image}`}
                  alt={member.name}
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        {activeTeam === 'board' &&
          boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-auto md:h-52"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={`/team-members/${member.image}`}
                  alt={member.name}
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        {activeTeam === 'advisors' &&
          advisors.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-auto md:h-52"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={`/team-members/${member.image}`}
                  alt={member.name}
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamSection;