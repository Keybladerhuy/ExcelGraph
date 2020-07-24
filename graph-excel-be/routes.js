// import
import express from 'express';
import SpreadsheetAPI from './spreadsheet.js';
const API = new SpreadsheetAPI;

// setup
const router = express.Router();

// permission
//router.use('requireGroup'); //Can use this to setup permission control

// routes
router.get('/', (req, res) => {
    res.send('Welcome to the spreadsheet API created by Andy!! I like Sushi.');
});

router.get('/api/get_sheet_info', (req, res) => {
    API.accessSpreadsheet().then((result) => {res.send(result);});
});

router.get('/api/get_rows', (req, res) => {
    const tabName = req.query.tabName ? req.query.tabName : 'Default';
    API.getRows(tabName).then((result) => {res.send(result);});
});

export default router;