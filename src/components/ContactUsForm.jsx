import React from 'react';

const ChatForm = () => {
  return (
    <div className=" flex justify-center items-center h-full ">
     
      <div className="w-full max-w-lg bg-white text-gray-900 p-6 rounded-lg shadow-lg">
  <h3 className="text-lg font-bold mb-4 text-green-500">Start a Chat</h3>
  <form className="space-y-6">
    <div>
      <label className="block text-sm mb-1 font-medium">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
    </div>
    <div>
      <label className="block text-sm mb-1 font-medium">Email</label>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
    </div>
    <div>
      <label className="block text-sm mb-1 font-medium">Message</label>
      <textarea
        placeholder="Type your message..."
        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        rows="4"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-green-600 p-3 rounded-lg text-white hover:bg-green-700 transition duration-300"
    >
      Send Message
    </button>
  </form>
</div>

    </div>
  );
};

export default ChatForm;
