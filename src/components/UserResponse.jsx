import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function UserResponse() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen"> 
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Response</h2>
      <pre className="bg-gray-100 p-4 rounded-lg">{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
  );
}

export default UserResponse;