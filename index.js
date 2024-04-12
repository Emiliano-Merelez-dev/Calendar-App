const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();


// creando el servidor
const app = express();

// database

dbConnection();

// CORS
app.use(cors())
// rutas

// directorio public

app.use( express.static('public') );

app.use( express.json() );


app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );





// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor correindo en puerto ${process.env.PORT} `);
});