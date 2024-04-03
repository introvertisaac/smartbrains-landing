"use client"
import React, { useEffect } from 'react';

const TawkChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/660c2f2fa0c6737bd12776e3/1hqfpglg2';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Listen for the 'openChat' event
    window.addEventListener('openChat', () => {
      if(window.Tawk_API) {
        window.Tawk_API.maximize();
      }
    });
  }, []);

  return <div />;
};

export default TawkChat;
