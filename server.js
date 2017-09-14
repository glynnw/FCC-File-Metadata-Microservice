const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/fileanalyze', upload.single('file'), (req, res) => {
  res.send({ fileSize: req.file.size })
})

var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})