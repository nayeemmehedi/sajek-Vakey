const express = require('express')
var cors = require('cors')
const ObjectId = require("mongodb").ObjectId
const { MongoClient } = require("mongodb");




const app = express()
const port =process.env.PORT ||4500

app.use(cors())
app.use(express.json());



const uri = "mongodb+srv://mydb500:MwbTkWDD2VQFBsvB@cluster0.bd1bx.mongodb.net/newdata?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  

client.connect((err) => {
  const All_collection = client.db("AllInformmation").collection("item");

  const Form_collection = client.db("FormInformmation").collection("form");


  app.get('/',(req, res) =>{


    res.send('hlw i am excited to learning node');


})
 

app.post("/addHome", (req, res) => {
    const event = req.body;
    

    All_collection.insertMany(event, (err, result) => {
     
      res.send({count:result})
    });
  });

  app.post("/HomeForm", (req, res) => {
    const event = req.body;
    

    All_collection.insertOne(event, (err, result) => {
     
      res.send({count:result})
    });
  });
app.delete(`/deleteForm/:id`,(req,res)=>{
     const id =req.params.id;
     
     Form_collection.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })
  app.post("/form", (req, res) => {
    const form = req.body;
    

    Form_collection.insertOne(form, (err, result) => {
     
      res.send({count:result})
    });
  });


app.get("/formdata", (req, res) => {
    Form_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

app.get("/home", (req, res) => {
    All_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });


app.get("/emaildata/:email", (req, res) => {

   email = req.params.email
  


    Form_collection.find({email:email}).toArray((err, documents) => {
      res.send(documents);
    });
  });


   app.patch("/process/:id", (req, res) => {

     const id = req.params.id;
     
     
     
     
    Form_collection.updateOne({_id:ObjectId(id)},
    {
      $set: {value : "Successful"}
    })
    .then(result =>{
       res.send(result);
      

    })

  })
    




})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})