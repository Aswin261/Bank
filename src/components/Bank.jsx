import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Tabs from './tab';
function Bank() {
    const [item,setItem]=useState([])
    
   useEffect(()=>{
    axios.get('http://localhost:3001/userdata')
    .then(res=>{
        setItem(res.data)
    })
    .catch(err=>{
        console.error(err)
    })
   },[]);
    return (<div class="d-flex">
       <div class="col-md-5 m-4" ><Tabs/></div>
        <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-left table-responsive">
                    <tbody>
                    <tr>
                        <th style={{border:"solid"}}><b>Sl No</b></th>
                         <th style={{border:"solid"}}><b>Name</b><br/></th>
                         <th style={{border:"solid"}}><b>Account No</b><br/></th>
                         <th style={{border:"solid"}}><b>Balance</b><br/></th>
                         <th style={{border:"solid"}}><b>Type</b></th>

                       </tr>
                        {item.map((data)=>
                                <tr class="center">
                                    <td style={{border:"solid"}}>{data.Customer_id}</td>
                                    <td style={{border:"solid"}}>{data.Customer_name}</td>
                                    <td style={{border:"solid"}}>{data.Customer_acct_no}</td>
                                  <td style={{border:"solid"}}>{data.Balance_amt}</td>
                                  <td style={{border:"solid"}}>{data.Type}</td>
        
                                </tr>
                        )}
                        </tbody>
                        </table>
    </div>);
}

export default Bank;