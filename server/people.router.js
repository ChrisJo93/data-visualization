const express = require('express');
const pool = require('./pool');
const router = express.Router();

router.get('/', (req, res) => {
  const getPeople = `SELECT * FROM "people"`;
  pool
    .query(getPeople)
    .then((result) => {
      res.send(result.rows);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
    });
});

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
  //not necessary in a smallscale application
  //adding all 50 individuals at once by calling pool query for each person.
  people.foreach((person) => {
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