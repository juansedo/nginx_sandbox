const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/app1', (req, res) => {
	const headers = JSON.stringify(req.headers);
	console.log('REQUEST headers', headers);

	res.send(headers + '\r\nHello World!');
});

app.get('/app2', (req, res) => {
	const headers = JSON.stringify(req.headers);
	console.log('REQUEST headers', headers);

	res.send(headers + '\r\nHello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
