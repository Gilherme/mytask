import express from 'express';
const app = express();
const PORT = 2110;

app.get('/', (req, res) => {
  res.send('servidor on')
})

app.listen(PORT, () => {
  console.log("http://localhost:2110/")
})
