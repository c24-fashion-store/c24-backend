import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express'
import routes from './src/api/routes'
import dbInit from './src/db/init'
import * as google from './google';
import { writeFileLocally } from './src/utils/utils'
import { formatExcelToJson } from './src/utils/InventoryUtil'
dbInit()



const app: Application = express()
const port = 3001

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes)
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.get('/auth/google', (req, res) => {
    const url = google.getAuthUrl()
    return res.redirect(url)
})

app.get('/auth/callback', async (req, res) => {
   const code = req.query.code
   const data = await google.readData(code)
   writeFileLocally('inventory.json', formatExcelToJson(data))
   res.status(200).send(data)
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    console.log(`Error occurred: ${error}`)
}