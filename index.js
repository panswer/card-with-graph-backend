const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const cors = require('cors');

const pathENV = path.resolve(__dirname, './.env');

if (fs.existsSync(pathENV)) {
    dotenv.config({
        path: pathENV
    });
}

const app = require('./app/app');

app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, err => err ? console.log(err) : console.log(`Server on ${port}`));