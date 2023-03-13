const express = require('express');
const connectDB = require('./config/config');
const app = express()
const cors = require('cors')

console.log('comenaando nodeSend')

const PORT = process.env.PORT || 4000;

connectDB()
app.use(express.json())

app.use(express.static('uploads'))
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}


app.use(cors(corsOptions))

app.listen(PORT, () => {
  console.log(PORT)
})

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/enlaces', require('./routes/enlaces'))
app.use('/api/archivos', require('./routes/archivos'))
