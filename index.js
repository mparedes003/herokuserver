require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 8000;

// const port = 8000;
const instance = server.listen(port, () =>
	console.log(`\n=== Server running on port: ${instance.address().port} ===\n`)
);
