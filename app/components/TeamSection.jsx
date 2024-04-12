"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Define the team member data
const managementTeam = [
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
];

const boardMembers = [
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
];

const Staff = [
  { name: 'James Ongweno', title: 'Board Chairperson', image: 'avatar.svg' },
];

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState('management');
  const [bgOpacity, setBgOpacity] = useState(0.5); // Initial opacity value

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg.svg')`,
          opacity: bgOpacity,
        }}
      />

      <div className="relative z-10 flex py-20 flex-col md:flex-row justify-center">
        {/* Left-side menu */}
        <div className=" p-4 md:w-1/4 md:h-auto ml-4">
          <h2 className="text-2xl font-bold mb-4">The SmartBrains team</h2>
          <ul>
            <li
              className={`cursor-pointer px-2 py-1 rounded ${activeTeam === 'management' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setActiveTeam('management')}
            >
              Management
            </li>
            <li
              className={`cursor-pointer px-2 py-1 rounded ${activeTeam === 'board' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setActiveTeam('board')}
            >
              Board
            </li>
            <li
              className={`cursor-pointer px-2 py-1 rounded ${activeTeam === 'Staff' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setActiveTeam('Staff')}
            >
              Staff
            </li>
          </ul>

          {/* Opacity Slider */}
          {/* <div className="mt-4">
            <label htmlFor="bgOpacity" className="block text-sm font-medium text-gray-700">
              Background Opacity
            </label>
            <input
              id="bgOpacity"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={bgOpacity}
              onChange={(e) => setBgOpacity(parseFloat(e.target.value))}
              className="mt-1 block w-full"
            />
          </div> */}
        </div>

        {/* Team member cards */}
        <div className="flex justify-center items-center gap-6">
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
          {activeTeam === 'Staff' &&
            Staff.map((member, index) => (
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
    </div>
  );
};

export default TeamSection;