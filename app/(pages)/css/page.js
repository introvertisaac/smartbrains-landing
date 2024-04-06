"use client";
import React from "react";
import HeroCard from "@/app/shared/HeroCard";

const page = () => {
  const handleJoinClick = () => {
    // Handle the 'Join Us' button click
    window.dispatchEvent(new Event("openChat"));
  };

  return (
    <div>
      <HeroCard
        title="Crafting Futures through Coding"
        description="We empower schools to teach Computer Science"
        // count={102}
        // partners={[
        //   { src: "/kpsa.jpeg", alt: "Logo 1" },
        //   { src: "/mastercard.jpeg", alt: "Logo 2" },
        // ]}
        backgroundImage="/html-bg.webp"
        onJoinClick={handleJoinClick}
      />
    </div>
  );
};

export default page;
