const express = require('express');
const apiRoutes = require('./utils/apiRoutes');
const htmlRoutes = require('./utils/htmlRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use('/', htmlRoutes);
// app.use('/', apiRoutes);


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})