const express = require('express')
const path = require ('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port_number = 3333;
app.listen(port_number, () => {
	console.log("listening on " + port_number);
});
