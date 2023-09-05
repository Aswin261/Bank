import React, { useState } from 'react';
import axios from 'axios';

function Deposit() {
  const [customerId, setCustomerId] = useState('');
  const [deposit, setDeposit]=useState('');

  const handleSubmit=()=>{
  axios.put(`http://localhost:3001/userdata/${customerId}/deposit`, { Deposit_amt: deposit })
    .then(response => {
      console.log(response.data); 
      alert("Amount Deposited")
    })
    .catch(error => {
      console.error(error);
      alert("Cannot be Deposited")
    });
  }

  return (
    <div>
      <form class="bg-secondary  justify-content-center border rounded col-md-6  p-2 m-5" >
          <input
            type="text"
            name="Customer_id"
            placeholder="Id"
            value={customerId}
            onChange={(e) => { setCustomerId(e.target.value) }}
            pattern="[0-9]+"
            required
            class="mb-1" /><br />
          <input
            type="text"
            name="Customer_name"
            placeholder="Amount to Deposit"
            value={deposit}
            onChange={(e) => { setDeposit(e.target.value) }}
            required
            class="mb-1" /><br />
            <button class="bg-primary text-light border rounded px-1 mx-1" onClick={handleSubmit}>Deposit</button>
            </form>
    </div>
  );
}

export default Deposit;
