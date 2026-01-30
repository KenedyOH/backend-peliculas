const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend funcionando 🚀' });
});

app.listen(PORT, () => {
  console.log('Servidor activo en puerto', PORT);
});
