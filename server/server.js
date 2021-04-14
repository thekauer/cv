
const recog = require('./recog.js');
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 8080;
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/recog',async (req,res) => {
    const {img} = req.body;
    const resp = await recog(img);
    res.send(resp);
})



app.listen(port, () => {
  console.log(`App running on ${port}`);
})