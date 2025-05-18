const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();
const PORT = 8000;

// Make sure to run "node Webpage/server.js" from the Hospital Project directory. Otherwise the .vscode folder won't be accessed properly.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/HospitalMap', (req, res) => {
  res.sendFile(path.join(__dirname + '/HospitalMap/MapDropdown.html'));
});

app.use('/', router); 
app.use('/Webpage', router);
app.listen(process.env.port || PORT);

console.log(`Express server running at http://localhost:${PORT}`);