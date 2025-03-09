import React, { useEffect } from 'react';

const VoiceBot = () => {
  useEffect(() => {
    // Ensure the script is loaded only once when component mounts
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="voice-bot-container">
      <elevenlabs-convai agent-id="8AodD9zh3nXPBPDhPjR3"></elevenlabs-convai>
    </div>
  );
};

export default VoiceBot;
