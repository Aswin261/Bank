const express=require('express');
const cors = require("cors");
const {connectToDb,getDb}=require('./db');
const { ObjectId } = require('mongodb');
let db
const app=express();
app.use(express.json());
app.use(cors());
connectToDb((err)=>{
    if(!err){
        app.listen(3001,()=>{
            console.log("listening on port 3001")
    })
    db=getDb()
}
})

app.get('/userdata',(req,res)=>{
    let posts=[]
    db.collection('userdata')
    .find()
    .sort({id:1})
    .forEach(post=>posts.push(post))
    .then(()=>{
        res.status(200).json(posts)
    })
    .catch(()=>{
        res.status(500).json({error:"fetch the documents"})
    })
})

//Add
app.post('/userdata', (req, res) => {
  db.collection('userdata').findOne({ Customer_id: Number(req.body.Customer_id) })
    .then(existingUser => {
      if (existingUser) {
        res.status(409).json({ error: 'Customer with this ID already exists' });
      } else {
        db.collection('userdata').insertOne({
          Customer_id: Number(req.body.Customer_id),
          Customer_name: req.body.Customer_name,
          Customer_acct_no: Number(req.body.Customer_acct_no),
          Balance_amt: Number(req.body.Balance_amt),
          Type: req.body.Type,
        })
        .then(result => {
          res.status(201).json(result.value);
        })
        .catch(err => {
          res.status(500).json({ error: 'Could not create a document' });
        });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not check for existing user' });
    });
});



//Modify
app.put('/userdata/:id', (req, res) => {
    const id = Number(req.params.id);

    const updateData = {};
    if (req.body.Customer_name) updateData.Customer_name = req.body.Customer_name;
    if (req.body.Customer_acct_no) updateData.Customer_acct_no = Number(req.body.Customer_acct_no);
    if (req.body.Balance_amt) updateData.Balance_amt = Number(req.body.Balance_amt);
    if (req.body.Type) updateData.Type = req.body.Type;
  
    db.collection('userdata').updateOne({ Customer_id: id }, { $set: updateData },{ returnOriginal: false })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
  
  //Delete
  app.delete('/userdata/:id', (req, res) => {
    const id = Number(req.params.id);
  
    db.collection('userdata').deleteOne({ Customer_id: id })
      .then(result => {
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "Invalid item" });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
  

  //deposit
  app.put('/userdata/:id/deposit', (req, res) => {
    const id = Number(req.params.id);
    const depositAmount = Number(req.body.Deposit_amt);
  
    db.collection('userdata').findOneAndUpdate(
      { Customer_id: id },
      { $inc: { Balance_amt: depositAmount } },
      { returnOriginal: false }
    )
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
  });

  //Withdraw
  app.put('/userdata/:id/withdraw', (req, res) => {
    const id = Number(req.params.id);
    const withdrawAmount = Number(req.body.withdraw_amt);
  
    db.collection('userdata').findOne({ Customer_id: id })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ error: 'User not found' });
        } else if (userData.Balance_amt < withdrawAmount) {
          res.status(400).json({ error: 'Insufficient balance' });
        } else {
          db.collection('userdata').findOneAndUpdate(
            { Customer_id: id },
            { $inc: { Balance_amt: -withdrawAmount } },
            { returnOriginal: false }
          )
          .then(result => {
            res.status(200).json(result);
          })
          .catch(err => {
            res.status(500).json({ error: err });
          });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
  
  

  
  