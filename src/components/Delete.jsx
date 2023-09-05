import React, { useState } from 'react';
import axios from 'axios';

function DeleteRecord() {
  const [customerId, setCustomerId] = useState('');

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/userdata/${customerId}`)
      .then(response => {
        console.log(response.data);
        alert("Deleted");
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("Invalid item");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <input type="text" value={customerId} Placeholder="Enter Customer Id"onChange={e => setCustomerId(e.target.value)} />
      <button class="bg-primary text-light border rounded p-1 mx-1" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteRecord;
