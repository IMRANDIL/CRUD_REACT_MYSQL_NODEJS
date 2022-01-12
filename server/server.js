const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const router = require('./router/router')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);







const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})