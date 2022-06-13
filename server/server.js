const express = require('express');
const mathHandler = require('./handlers/math')

const app = express();

app.use(express.json())

app.get("/is-leap-year", mathHandler.isLeapYear)
app.get("/is-weekend", mathHandler.isWeekend)












console.log('Running a server...')
app.listen(3050)