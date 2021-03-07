const express = require('express');
const app = express();
const peopleRouter = require('./people.router');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/people', peopleRouter);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
