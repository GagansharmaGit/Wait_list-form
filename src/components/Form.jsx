import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    TelegramHandle: '',
    noOfNodes: '',
    TireOfNode: '',
    WalletAddress: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data before submission:', formData); 

    try {
        console.log('Attempting to submit form...');
        console.log('Form data being sent:', formData); // Log the form data being sent
        const response = await axios.post('http://localhost:3000/form', formData);
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        if (error.response) {
          console.error('Form submission failed:', error.response.statusText);
          console.error('Error response data:', error.response.data); // Log error response data
        } else {
          console.error('Error submitting form:', error.message);
        }
      }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg ">
      <div className="flex flex-wrap -mx-2 mb-4 bg-slate 500 rounded-full">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 font-bold mb-2">Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 font-bold mb-2">Telegram Handle:</label>
          <input type="text" name="TelegramHandle" value={formData.TelegramHandle} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 font-bold mb-2">No of Nodes:</label>
          <input type="text" name="noOfNodes" value={formData.noOfNodes} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 font-bold mb-2">Tier of Node (ex:Tire 1):</label>
          <select name="TireOfNode" value={formData.TireOfNode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full">
            <option value="">Select Tier</option>
            {[...Array(10).keys()].map(i => (
              <option key={i} value={`Tire ${i + 1}`}>{`Tire ${i + 1}`}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 font-bold mb-2">WalletAddress:</label>
          <input type="text" name="WalletAddress" value={formData.WalletAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 font-bold mb-2">Mobile:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-full" />
        </div>
      </div>
      <button type="submit" className=" rounded-full w-full py-2 bg-[#25B021] text-white font-bold  hover:bg-green-600">Join the waitlist</button>
    </form>
  );
};

export default Form;