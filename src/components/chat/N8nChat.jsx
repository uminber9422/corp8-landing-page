import { useEffect } from 'react';
import './n8nChat.css';

const N8nChat = () => {
  useEffect(() => {
    const loadChat = async () => {
      try {
        // Load n8n chat styles
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        document.head.appendChild(linkElement);

        // Inject custom styles
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          .chat-window-toggle:hover {
            opacity: 0.9;
            transform: scale(1.05);
            transition: all 0.3s ease;
          }

          .chat-input-field {
            border-color: #4169E1 !important;
          }

          .chat-input-field:focus {
            border-color: #8A2BE2 !important;
            box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.2) !important;
          }
        `;
        document.head.appendChild(styleElement);

        // Load and initialize n8n chat
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        createChat({
          webhookUrl: 'https://n8n.pragati.io/webhook/8a1a8897-913b-441b-a77d-9d37b7faa72b/chat',
          mode: 'window',
          target: '#n8n-chat-widget',
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            'I am Corp8.ai Assistant. How can I assist you today?'
          ],
          i18n: {
            en: {
              title: 'Hi there! 👋',
              subtitle: "Start a chat. We're here to help you 24/7.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..',
            },
          },
          branding: {
            name: 'Corp8.ai',
            showPoweredBy: false,
            removeDefaultPoweredBy: true
          }
        });

        // Add style override after chat initialization
        setTimeout(() => {
          const overrideStyles = document.createElement('style');
          overrideStyles.innerHTML = `
            :root {
              --chat-primary-color: #4169E1 !important;
              --chat-secondary-color: #8A2BE2 !important;
            }
            .chat-window-toggle, 
            .chat-message-bubble.outgoing, 
            .chat-input-submit-button,
            .chat-window-header {
              background: linear-gradient(90deg, #4169E1 0%, #8A2BE2 100%) !important;
              color: white !important;
            }
            .chat-window-powered-by {
              display: none !important;
            }
            .chat-message-container::after {
              content: 'Powered by Corp8.ai';
              display: block;
              text-align: center;
              font-size: 12px;
              color: #666;
              margin: 8px 0;
              padding: 4px;
              font-family: inherit;
            }
          `;
          document.head.appendChild(overrideStyles);

          // Add custom powered by text to initial chat window
          const addPoweredBy = () => {
            const messageContainer = document.querySelector('.chat-message-container');
            if (messageContainer && !messageContainer.querySelector('.corp8-powered-by')) {
              const poweredByDiv = document.createElement('div');
              poweredByDiv.className = 'corp8-powered-by';
              poweredByDiv.textContent = 'Powered by Corp8.ai';
              poweredByDiv.style.cssText = `
                text-align: center;
                font-size: 12px;
                color: #666;
                margin: 8px 0;
                padding: 4px;
              `;
              messageContainer.appendChild(poweredByDiv);
            }
          };

          // Try to add powered by text multiple times to ensure it appears
          addPoweredBy();
          setTimeout(addPoweredBy, 500);
          setTimeout(addPoweredBy, 1000);
          setTimeout(addPoweredBy, 2000);

          // Add powered by text when chat window is opened
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.addedNodes.length) {
                addPoweredBy();
              }
            });
          });

          // Start observing the chat widget for changes
          const chatWidget = document.getElementById('n8n-chat-widget');
          if (chatWidget) {
            observer.observe(chatWidget, { childList: true, subtree: true });
          }
        }, 1000);

        // Add click event listener with a delay to ensure chat is loaded
        setTimeout(() => {
          const handleClickOutside = (event) => {
            const chatContainer = document.querySelector('.chat-window-wrapper');
            const chatButton = document.querySelector('.chat-window-toggle');
            
            // Only proceed if chat window is open
            if (chatContainer && 
                chatContainer.style.display !== 'none' && 
                !chatContainer.contains(event.target) && 
                !chatButton.contains(event.target)) {
              // Find the minimize button and click it
              const minimizeButton = document.querySelector('.chat-window-toggle');
              if (minimizeButton) {
                minimizeButton.click();
              }
            }
          };

          // Add the event listener
          document.addEventListener('mousedown', handleClickOutside);

          // Store the handler for cleanup
          window._chatClickHandler = handleClickOutside;
        }, 1000);

        return () => {
          document.head.removeChild(linkElement);
          document.head.removeChild(styleElement);
          // Remove the event listener if it exists
          if (window._chatClickHandler) {
            document.removeEventListener('mousedown', window._chatClickHandler);
            delete window._chatClickHandler;
          }
        };
      } catch (error) {
        console.error('Failed to load n8n chat:', error);
      }
    };

    loadChat();
  }, []);

  return <div id="n8n-chat-widget" className="n8n-chat-widget" />;
};

export default N8nChat;
