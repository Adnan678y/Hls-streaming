const express = require('express');
const path = require('path');

const app = express();

// Serve M3U8 & TS files
app.use('/vid', express.static(path.join(__dirname, './cnd')));

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
