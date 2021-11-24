const express = require('express');
const ApolloServer = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;


app.listen(port || 3000, () => console.log(`App is running on port: http://localhost:${port}`));