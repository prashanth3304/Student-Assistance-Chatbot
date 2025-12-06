import React, { useState, useRef, useEffect } from 'react';

const predefinedResponses = {
  'syllabus': 'You can find the complete syllabus in the Resources section. Select your education level and check under the Syllabus category.',
  'textbook': 'All recommended textbooks are available in the Resources section under the Textbooks category for each education level.',
  'exam': 'You can find previous year question papers in the Resources section. They\'re organized by year under the Papers category.',
  'career': 'Please visit our Career Guidance section for detailed information about career paths and opportunities.',
  'help': 'I can help you with information about syllabus, textbooks, exams, and career guidance. What would you like to know?',
};

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Student Assistant. How can I help you today? You can ask me about syllabus, textbooks, exams, or career guidance.",
      sender: 'assistant'
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (response) => {
    setIsTyping(true);
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    setMessages(prev => [...prev, { text: response, sender: 'assistant' }]);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Generate response based on keywords
    let botResponse = "I'm not sure about that. Try asking about syllabus, textbooks, exams, or career guidance.";
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (input.toLowerCase().includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    await simulateTyping(botResponse);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-w-5xl mx-auto">
      <div className="flex-1 overflow-y-auto bg-gray-800 rounded-t-lg">
        <div className="space-y-4 p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 text-white'
                }`}
              >
                <div className="flex items-start">
                  {message.sender === 'assistant' && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                        <span className="text-white text-sm">AI</span>
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white rounded-lg p-4 max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSend} className="bg-gray-700 p-4 rounded-b-lg">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInterface;