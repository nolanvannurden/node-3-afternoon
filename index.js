require('dotenv').config();
const massive = require('massive');
const express = require('express');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
	connectionString: CONNECTION_STRING,
	ssl: {rejectUnauthorized: false}
}).then(db => {
		app.set('db', db);
}).catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORT, () => {
	console.log(`server listening on ${SERVER_PORT}`)
})