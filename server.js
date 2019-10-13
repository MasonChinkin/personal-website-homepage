const express = require('express');
const path = require('path');

// App
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  console.log('ROUTE: /ping');
  return res.send('pong');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 80;
app.listen(PORT);
console.log(`Running on port ${PORT}`);