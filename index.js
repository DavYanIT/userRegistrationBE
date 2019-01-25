const express = require('express');
const app = express();
require('./src/app')(app);
app.listen(3000, () => {
    console.log('Server is running')
})