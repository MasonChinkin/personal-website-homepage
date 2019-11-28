const express = require('express');
const path = require('path');

// App
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 8010;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);