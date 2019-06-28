const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
 
var client = new Client();

const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());

app.post('/getLocation', (req, res) => {
    const  KeyType = req.body.city;

    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+KeyType+"&key=AIzaSyAf6lCo0l1dZ-6EmlnQ1iUJze-5ZIfvqjg", function (data, response) {
   console.log(data);
   res.json({msg:true,data:data})
});


})



app.listen(3001, () => {
    console.log('Listen oport 3001');
})