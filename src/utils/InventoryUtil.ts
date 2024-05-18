import { parseStringToDecimal } from "./utils"

export const formatExcelToJson = (data: Array<Array<string>> | null | undefined) => {
    const formattedData = data?.map((row) => JSON.stringify({
        code: row[0],
        stock: row[1],
        quantity: row[2],
        sizes: [
            { 'XS': row[3]},
            { 'S': row[4]},
            { 'M': row[5]},
            { 'L': row[6]},
            { 'XL': row[7]}
        ],
        orderCode: row[8],
        underShipment: row[9] ?? false,
        category: row[10],
        image: row[11],
        description: row[12],
        sku: row[13],
        sizesAvailable: [
            { 'XS': row[14] },
            { 'S': row[15] },
            { 'M': row[16] },
            { 'L': row[17] },
            { 'XL': row[18] },
        ],
        dollarCost: parseStringToDecimal(row[19]) ?? 0,
        dollarCostWithDiscount: parseStringToDecimal(row[20]) ?? 0,
        quetzalCost: parseStringToDecimal(row[21]),
        subTotalCost: parseStringToDecimal(row[22]),
        subTotalCostInQuetzales: parseStringToDecimal(row[23]),
        subTotalCostWithShipment: parseStringToDecimal(row[24]),
        finalCost: parseStringToDecimal(row[25]),
        salePrice: parseStringToDecimal(row[26]),
        offerSale: [
            parseStringToDecimal(row[27])
        ],
        // This values are going to be updated every time i make a register
        estimatedProfit: parseStringToDecimal(row[29]),
        totalSales: parseStringToDecimal(row[30]),
    }))

    return `[\n${formattedData?.join(',\n')}\n]`
}