require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 8000; //either use the dynamic port provided by heroku, or use a port number defined by user on local host during development
const instance = server.listen(port, () =>
	console.log(`\n=== Server running on port: ${instance.address().port} ===\n`)
);
