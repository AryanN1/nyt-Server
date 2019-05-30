const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors);

app.use(morgan('common')); 
// What does comment form look like?
const books = require('./books.js');
app.get('/books', (req, res) => {
// All code goes here
const {search = " "} = req.query;

if (sort){
  if (!['title', 'rank'].includes(sort)){
    return res
      .status(400)
      .send('Sort must be one of title or rank ');
  }
}

let results = books.filter (book =>
    book
    .title
    .toLowerCase
    .includes(search.toLowerCase()));

if (sort){
  results
    .sort((a, b) => {
      return a [sort] > b [sort] ? 1 : a [sort] < b [sort] ? -1 : 0;
    });
}

res
  .json(results);
});

app.listen(8080, ()=> {
  console.log('Server started on PORT 8080');
});