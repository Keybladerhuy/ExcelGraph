import GoogleSpreadsheet from 'google-spreadsheet';
import creds from './client_secret.json';
const promisify = f => (...args) => new Promise((a,b)=>f(...args, (err, res) => err ? b(err) : a(res)));
const GoogleSpreadsheetURLSubstr = '1r02yIW2mcrjPRXSFzS-yhDERObquGxvkGt2uOXUG7Lo'; // Can make this dynamic

const Tabs = {
    Default: 0,
    BaseData: 0,
    Moves: 1
}

class SpreadsheetAPI {
    promisify;
    creds;

    constructor() {
        this.promisfy = promisify;
        this.creds = creds;
    }

    async accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(GoogleSpreadsheetURLSubstr); // This is in the url.

        await promisify(doc.useServiceAccountAuth)(creds);
        const info = await promisify(doc.getInfo)();
        const sheet = info.worksheets[0];
        
        console.log(`Spreadsheet info: Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
        const log = `Title: ${sheet.title}, Rows: ${sheet.rowCount}`;
        return log;
    }

    async getRows(tabName) {
        const doc = new GoogleSpreadsheet(GoogleSpreadsheetURLSubstr);
        await promisify(doc.useServiceAccountAuth)(creds);
        const info = await promisify(doc.getInfo)();
        const sheet = info.worksheets[Tabs[tabName]];

        const rows = await promisify(sheet.getRows)({
            offset: 1
        });
        return rows;
    }
}

export default SpreadsheetAPI;


// Adding a new row
// https://www.youtube.com/watch?v=UGN6EUi4Yio&t=182s


// More tutorials on spreadsheet
// https://www.youtube.com/watch?v=MiPpQzW_ya0






// https://docs.google.com/spreadsheets/d/1r02yIW2mcrjPRXSFzS-yhDERObquGxvkGt2uOXUG7Lo/edit#gid=0