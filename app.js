const express = require('express')
const cors = require('cors')
const data = require('./data/students')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())

function findById(data, id) {
  for (i=0;i<data.length;i++) {
    if (id == data[i].id) {
      return data[i]
    }
  }
  return false
}

app.get('/', function(req, res) {
  res.json({data})
})

app.get("/:id", function (req, res) {
  var studentById = findById(data, req.params.id)
  if (studentById) {
    res.json({"data": studentById})
  } else res.status(404).json({"error": {"message": "No record found!"}})
})

console.log("Running on port: " + port)
app.listen(port)
