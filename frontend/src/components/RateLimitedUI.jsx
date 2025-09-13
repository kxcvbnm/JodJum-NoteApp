import React from 'react'
import { PlugZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="bg-primary/20 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <PlugZapIcon className="size-16 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              Almost there! You’ve made a few too many requests. Take a short break and try again soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;