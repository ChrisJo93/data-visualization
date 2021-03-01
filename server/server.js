const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
