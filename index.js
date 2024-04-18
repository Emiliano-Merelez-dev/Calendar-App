const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();


// creando el servidor
const app = express();

// database

dbConnection();

// CORS
app.use(cors({
    origin: 'http://localhost:4001'
}));
// rutas

// directorio public

app.use( express.static('public') );

app.use( express.json() );


app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html' );
})





// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor correindo en puerto ${process.env.PORT} `);
});