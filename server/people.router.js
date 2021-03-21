const express = require('express');
const pool = require('./pool');
const router = express.Router();

router.get('/', (req, res) => {
  const getPeople = `SELECT * FROM "people"`;
  pool
    .query(getPeople)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('problem in get route', error);
    });
});

router.post('/update', (req, res) => {
  console.log('router hit');
  console.log(req.body);
  //req.body will provide the object with key value pair {taco: 'taco'}
  console.log(req.body.taco);
  //req.body.taco will then provide just the value of "taco"
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

  const promises = people.map((person) =>
    //bundle each person-entry's promise into a reference variable
    pool.query(insertPeople, [
      person.name,
      person.ethnicity,
      person.education,
      person.gender,
      person.language,
    ])
  );
  Promise.all(promises)
    //pass the bundle of promises to promise all
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('it ait work', error);
      res.sendStatus(500);
    });
});
module.exports = router;
