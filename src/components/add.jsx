import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [form, setForm] = useState({
    Customer_id:"",
    Customer_name: "",
    Customer_acct_no: "",
    Balance_amt: "",
    Type:"",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/userdata", form);
      console.log(res.data);
      alert("Data added successfully");
    } catch (err) {
      console.error(err);
      if (err.response.status === 409) {
        alert(err.response.data.error);
      } else {
        alert("Data cannot be added");
      }
    }
    setForm({
      Customer_id: "",
      Customer_name: "",
      Customer_acct_no: "",
      Balance_amt: "",
      Type: "",
    });
  };
  

  

  return (
    <div >
      <div className="d-flex justify-content-center">
      <form class="border rounded p-3  m-5 bg-secondary" onSubmit={handleSubmit}>
     <input
          type="text"
          name="Customer_id"
          placeholder="Id"
          value={form.Customer_id}
          onChange={handleChange}
          pattern="[0-9]+"
          required
          class="mb-1"/><br/>
        <input
          type="text"
          name="Customer_name"
          placeholder="Name"
          value={form.Customer_name}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="text"
          name="Customer_acct_no"
          placeholder="Acc No"
          pattern="[0-9]+"
          value={form.Customer_acct_no}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="number"
          name="Balance_amt"
          placeholder="Balance"
          value={form.Balance_amt}
          onChange={handleChange}
          required
          class="mb-1" /><br/>
          <input
          type="text"
          name="Type"
          placeholder="Transaction type"
          value={form.Type}
          onChange={handleChange}
          required
          class="mb-1" /><br/>
  
        <button class="bg-primary text-light border rounded p-1"type="submit">Add</button>
      </form>
      </div>
    </div>
  );
}

export default Add;
