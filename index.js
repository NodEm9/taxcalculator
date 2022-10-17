const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000; 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'src/')));
app.use('/lib', express.static(path.join(__dirname, 'lib'))); 

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
