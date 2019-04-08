const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 65535;


app.use(cors())
app.use(morgan('dev'))
app.use(express.static('dist'));

app.listen(PORT, () => console.log('Listening on port: ' + PORT))