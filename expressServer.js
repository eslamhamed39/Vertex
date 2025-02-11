const express = require('express');
const path = require('path');

const app = express();

// Serve your built Angular dist folder
app.use(express.static(path.join(__dirname, './dist/vertex')));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/vertex', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
