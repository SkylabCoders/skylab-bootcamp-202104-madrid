const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-ejs-a5765-default-rtdb.europe-west1.firebasedatabase.app/'
});

const database = admin.database()

const server = express();

server.set('view engine', 'ejs')

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))

const routes = require('./routes/router')

server.use('/', routes)

const PORT = process.env.PORT || 4000
server.listen(PORT, () =>(`Server is running at PORT ${PORT}`))