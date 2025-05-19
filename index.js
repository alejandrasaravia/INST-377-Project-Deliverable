const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/marta', async (req, res) => {
  try {
    const response = await axios.get(
      'http://developer.itsmarta.com/BRDRestService/RestBusRoutes/GetAllBusRoutes'
    );
    res.json(response.data);
  } catch (error) {
    console.error('MARTA fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch MARTA data' });
  }
});


app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
