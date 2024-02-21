const express = require("express");
const app = express();
const cors = require("cors");
const knex = require('../server/db/knex');
const dotenv = require('dotenv');

dotenv.config({
     path: '../server/.env',
   });

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());  //req body

//ROUTES

//get all books 

app.get("/books", async (req,res)=>{
  try{
      const allData = await knex("biling").select("*")
      res.send(allData);
  } catch (err){
      console.log(err)
  }
})

// Save books into database
app.post("/books", async (req,res)=>{
  try{
      const postedContent = req.body;
      const newTask = await knex("bilingual").insert({
          "id": postedContent.id,
          "lang1":postedContent.lang1,
          "lang2":postedContent.lang2, 
      }).into("biling")
      res.status(200).send(req.body)
  } catch (error){
      console.error(error.message)
  }
})

//get a single book
app.get("/books/:id", async (req,res)=>{
  try {
      const id = req.params.id;
      const getById = await knex("bilingual").select({
          id: 'id',
          lang1: 'lang1',
          lang2: 'lang2',
      }).from("biling").where('id',id);
      res.status(200).send(getById);
      
  } catch (error) {
      console.error(error.message)
  }
})

// update a book
app.put("/update/:id", async (req,res)=>{
  try {
      const id = req.params.id;
      const lang1 = req.body.lang1;
      const lang2 = req.body.lang2; 
      const update = await knex("bilingual").from("biling").where('id',id).update({
          lang1: lang1,
          lang2: lang2,
      }).then(()=>{res.send("Update Complete")})
      
  } catch (error) {
      console.error(error.message)
  }
})

// delete 

app.delete("/delete/:id", async(req,res)=>{
  try {
      const id = req.params.id;
      const deleteBook = await knex("bilingual").from("biling").where('id',id).del().
      then(()=>{res.send("Book deleted")})
  } catch (error) {
      console.error(error.message);
  }
})




app.listen(PORT, () => {
    console.log("server started on port ", PORT);
});
