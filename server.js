nes (7 sloc)  214 Bytes

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.listen(PORT, () => console.log('App running.'));
