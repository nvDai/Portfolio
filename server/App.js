const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080
app.use('/', express.static(path.join(__dirname, '/dist')))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
// app.get('/', (req,res) => {
//   res.sendFile('./dist/index.html');
// });

app.listen(port, () => console.log(`App listening on port ${port}!`))
