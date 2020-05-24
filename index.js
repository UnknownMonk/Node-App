const express = require('express');

const app = express();
let PORT = 5000;
app.get('/', (req, res) => {
  res.send('<h1>My Node App </h1>');
});

app.listen(PORT, () => {
  console.log(`App live on ${PORT}`);
});
