require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).json('root directory')
});

app.listen(PORT, () => {
  console.log(`Server is live on Port: ${PORT}`)
});

