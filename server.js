const express = require('express');
const fs = require('fs');
const port=44444
const bodyParser = require('body-parser')

const app = express();
app.use(express.static('client'))


app.use(bodyParser.json());
app.post('/upload_json', (req, res) => {})





app.listen(44444, () => console.log('Application started on port 44444'));









//body-parser parses your request and converts it into a format from which you can easily extract relevant information that you may need