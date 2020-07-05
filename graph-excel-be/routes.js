// import
import express from 'express';
import SpreadsheetAPI from './spreadsheet.js';
import { resolveSoa } from 'dns';

// setup
const router = express.Router();

// permission
//router.use('requireGroup'); //Can use this to setup permission control

// routes
router.get('/', (req, res) => {
    res.send('Welcome to the spreadsheet API created by Andy!! I like Sushi.');
});

router.get('/api/spreadsheet', (req, res) => {
    const API = new SpreadsheetAPI;

    API.accessSpreadsheet().then((result) => {
        res.send(result);
    });
});

router.post('/api/post_spreadsheet', (req, res) => {
    const API = new SpreadsheetAPI;

    API.accessSpreadsheet().then((result) => {
        res.send(result);
    });
});

export default router;