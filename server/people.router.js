const express = require('express');
const pool = require('./pool');
const router = express.Router();

router.post((req, res) => {
  const people = req.body;
  const insertPeople = `INSERT INTO "people" 
   ("name" ,
    "ethnicity" , 
    "education" , 
    "gender", 
    "language");`;
  pool
    .query(insertPeople, [
      people.name,
      people.ethnicity,
      people.education,
      people.gender,
      people.language,
    ])
    .then((result) => {
      res.sendStatus(201);
      console.log(`${people} added to database`);
    })
    .catch((error) => {
      console.log(`Problem adding people to database, ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
