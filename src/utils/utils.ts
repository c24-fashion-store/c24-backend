const fs = require('fs')

export const parseStringToDecimal = (number: string) => {
    return number.includes('.') ? parseFloat(number.replace(',','.')) : 0.0
}

export const writeFileLocally = (name:string, data:string) => {
    fs.writeFile(name, data, (err: Error) => {
        if (err) {
             console.error('Error writing to file', err)
             return
        }
        console.log('Data has been written to file')
    })
}
