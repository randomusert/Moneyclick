//const express = require("express")

//app.use("/", express.static("src"))

const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
app.use("/", express.static("src"))

app.listen(port, () => {
  console.log(`game server is listening on port ${port}`)
})