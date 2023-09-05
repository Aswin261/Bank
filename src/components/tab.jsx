import React,{useState} from 'react';
import Add from './add';
import Delete from './Delete';
import Deposit from './Deposit';
import Modify from './Modify';
import Withdraw from './Withdraw';
function Tabs() {
    const [index,setIndex]=useState(0);
    
    return (
         <div>
        <ul class="nav nav-pills mb-2 m-3  justify-content-center border rounded bg-dark text-white" role="tablist">
            <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="tab" aria-haspopup="true" aria-expanded="false">Customer</a>
    <div class="dropdown-menu">
      <div class="dropdown-item" onClick={()=>{setIndex(0)}}>Add</div>
      <a class="dropdown-item" onClick={()=>{setIndex(1)}}>Modify</a>
      <a class="dropdown-item" onClick={()=>{setIndex(2)}}>Delete</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="dropdown" aria-haspopup="true" aria-expanded="false">Transaction</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" onClick={()=>{setIndex(3)}}>Deposit</a>
      <a class="dropdown-item" href="#" onClick={()=>{setIndex(4)}}>Withdraw</a>
    </div>
  </li>
        </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" hidden={index!==0}><Add/></div>
        <div class="tab-pane fade show active" hidden={index!==1}><Modify/></div>
        <div class="tab-pane fade show active"  hidden={index!==2}><Delete/></div>
        <div class="tab-pane fade show active" hidden={index!==3}><Deposit/></div>
        <div class="tab-pane fade show active" hidden={index!==4}><Withdraw/></div>
    </div>
</div> );
}

export default Tabs;

