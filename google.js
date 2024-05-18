const { google } = require('googleapis');
const fs = require('fs');

// Load credentials from a JSON file
const credentials = require('./googleCredentials.json');
console.log("🚀 ~ credentials:", credentials)

// Create a new JWT client using the credentials
const oauth2Client = new google.auth.OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  'http://localhost:3001/auth/callback'
);

export const getAuthUrl = () => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });
  console.log("🚀 ~ readData ~ authUrl:", authUrl)
  return authUrl
}

export const readData = async (code) => {
  // Authorize the client

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  
    // Access the Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

    // Get data from a specific sheet
    const response = await sheets.spreadsheets.values.get(
      {
        spreadsheetId: '18u42l1ipHFdklbkvo58Atdmqd5xQF5oQO22YZUqbdBc',
        range: 'COMPRAS E INVENTARIO!A2:AF2340', // Specify the range of cells you want to retrieve
      })

      const values = response.data.values

      //console.log('values: ', values)

      return values


}