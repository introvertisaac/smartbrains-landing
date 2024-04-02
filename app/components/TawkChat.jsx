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
  }, []);

  return <div />;
};

export default TawkChat;