const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

// App
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

const proxyOptions = {
  target: 'reactapp:8081', // target host
  changeOrigin: true, // needed for virtual hosted sites
}

app.use('/react-app', proxy(proxyOptions));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 80;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);