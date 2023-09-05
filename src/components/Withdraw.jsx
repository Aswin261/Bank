import React, { useState } from 'react';
import axios from 'axios';

function Withdraw() {
  const [customerId, setCustomerId] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };

  const handleWithdrawAmountChange = (event) => {
    setWithdrawAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:3001/userdata/${customerId}/withdraw`, { withdraw_amt: withdrawAmount })
      .then(response => {
        console.log(response.data);
        alert("Withdrawn Successfully")
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 400) {
          alert("Limit exceeded");
        } else {
          alert("Amount cannot be withdrawn");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} class="bg-secondary  justify-content-center border rounded col-md-6 mx-5  p-2 m-5">
      <input
            type="text"
            name="Customer_id"
            placeholder="Id"
            value={customerId}
            onChange={handleCustomerIdChange}
            pattern="[0-9]+"
            required
            class="mb-1" /><br />
        <input
            type="text"
            name="Customer_name"
            placeholder="Amount to Withdraw"
            value={withdrawAmount}
            onChange={handleWithdrawAmountChange}
            required
            class="mb-1" /><br />
        
        <button class="bg-primary text-light border rounded px-1 mx-1" type="submit">Withdraw</button>
      </form>
    </div>
  );
}
export default Withdraw;
