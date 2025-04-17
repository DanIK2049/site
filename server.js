const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/media', express.static(path.join(__dirname, 'media')));

// Возвращает список файлов в папке
app.get('/media-list/:section', (req, res) => {
  const section = req.params.section;
  const dirPath = path.join(__dirname, 'media', section);
  fs.readdir(dirPath, (err, files) => {
    if (err) return res.status(404).send([]);
    res.send(files);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
