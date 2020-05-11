const express = require('express')
const expressGraphQl = require('express-graphql');
const schema = require('./schema.js');


const app = express()
const port = 3000

app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}));
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))