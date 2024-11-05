import React from 'react';

const ChatForm = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      {/* Increased the max width to lg for a larger card */}
      <div className="w-full max-w-lg bg-black text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-green-500">Start a Chat</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-green-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 p-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
