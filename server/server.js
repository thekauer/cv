
const recog = require('./recog.js');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/recog',cors(), (req, res) => {
    res.send('helloo world');
})

app.post('/recog',async (req,res) => {
    const {img} = req.body;
    const resp = await recog(img);
    res.send(resp);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})