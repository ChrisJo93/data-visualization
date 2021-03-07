const express = require('express');
const pool = require('./pool');
const router = express.Router();

router.post('/', (req, res) => {
  const people = req.body;
  const insertPeople = `
    INSERT INTO "people" 
     ("name",
      "ethnicity", 
      "education", 
      "gender", 
      "language")
      VALUES ($1, $2, $3, $4, $5);`;
  people.map((person) => {
    pool
      .query(insertPeople, [
        person.name,
        person.ethnicity,
        person.education,
        person.gender,
        person.language,
      ])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Problem adding people to database, ${error}`);
        res.sendStatus(500);
      });
  });
});

module.exports = router;
