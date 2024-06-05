let express = require('express');
let app = express();
let port = 3000;


app.get("/whisper", (req,res) =>
{
  let name = req.query.name;
  let lowerCaseName = name.toLowerCase();
  res.send(lowerCaseName);
})

app.get("/productname",(req,res)=>
  {
   let productName = req.query.productName;
    let companyName = req.query.companyName;
    let fullProductName = productName + " "+ companyName
    res.send(fullProductName)
  })

app.get("/date",(req,res) =>
  {
    let month = req.query.month;
    let year = req.query.year;
    let formattedDate = month + " " + year;
    res.send(formattedDate)
  })

app.get("/date",(req,res) =>
  {
    let month = req.query.month;
    let year = req.query.year;
    let formattedDate = month + " " + year;
    res.send(formattedDate)
  })

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + "port");
});