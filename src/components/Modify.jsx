import React, { useState } from 'react';
import axios from 'axios';
function Modify() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [acc, setAcc] = useState('');
  const [balance, setBalance] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3001/userdata/${id}`, {
      Customer_name: name,
      Customer_acct_no: acc,
      Balance_amt: balance,
      Type: type,
    })
    .then(response => {
      console.log(response.data);
      alert("updated")
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div >
      <div className="d-flex justify-content-center">
        <form class="border rounded p-3  m-5 bg-secondary" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Customer_id"
            placeholder="Id"
            value={id}
            onChange={(e) => { setId(e.target.value) }}
            pattern="[0-9]+"
            required
            class="mb-1" /><br />
          <input
            type="text"
            name="Customer_name"
            placeholder="Name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            required
            class="mb-1" /><br />
          <input
            type="text"
            name="Customer_acct_no"
            placeholder="Acc No"
            pattern="[0-9]+"
            value={acc}
            onChange={(e) => { setAcc(e.target.value) }}
            required
            class="mb-1" /><br />
          <input
            type="number"
            name="Balance_amt"
            placeholder="Balance"
            value={balance}
            onChange={(e) => { setBalance(e.target.value) }}
            required
            class="mb-1" /><br />
          <input
            type="text"
            name="Type"
            placeholder="Transaction type"
            value={type}
            onChange={(e) => { setType(e.target.value) }}
            required
            class="mb-1" /><br />

          <button class="bg-primary text-light border rounded p-1" type="submit">Modify</button>
        </form>
      </div>
    </div>
  );
}


export default Modify