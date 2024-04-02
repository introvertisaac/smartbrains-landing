import React from "react";
import { Button } from "@/components/ui/button";
import PerksCard from "../(static)/PerksCard";

const Perks = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-between items-center pt-20 px-4 md:px-20">
      <div className="font-bold text-2xl md:text-3xl">Why Schools Love Us</div>
      <div className="w-full">
        <div className="w-full text-center flex flex-col sm:flex-row justify-center gap-8 pt-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-center mt-5 gap-6">
              <PerksCard image="/html.png" paragraph="We provide laptops for every child" />
              <PerksCard image="/css.png" paragraph="We have well experienced coding teachers" />
              <PerksCard image="/css.png" paragraph="We have well experienced coding teachers" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Button variant="destructive" size="lg">
          Join Us
        </Button>
      </div>
    </div>
  );
};

export default Perks;