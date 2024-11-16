const express = require("express");
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/spark/data',(req,res)=>{
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});