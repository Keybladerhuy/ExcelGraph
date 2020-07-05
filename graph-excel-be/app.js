// imports
import config from './config.js';
import routes from './routes.js';
import express from 'express';
import cors from 'cors';

// setup
const app = express();
app.set('hostname', config.server.host);
app.set('port', config.server.port);


// middleware
app.use(cors()); // Enable all CORS requests

// routes
app.use('/', routes);
    

export default app;





// testing purposes
// import SpreadsheetAPI from './spreadsheet.js';
// const test = new SpreadsheetAPI;
// test.getRows().then((res) => {
//     console.log(res);
// });