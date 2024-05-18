import { Optional } from "sequelize";
import { SizeAttributes } from "../../db/models/catalog/Size";
import { OfferSaleAttributes } from "../../db/models/catalog/offerSale";

export type createProductDTO = {
    code: string
    stock: number
    quantity: number
    sizes: SizeAttributes[]
    orderCode: string
    underShipment?: boolean
    image?: string
    description: string
    category: string
    sku?: string
    sizesAvailable: SizeAttributes[]
    dollarCost?: number
    dollarCostWithDiscount?: number
    quetzalCost?: number
    subTotalCost: number
    subTotalCostInQuetzales: number
    subTotalCostWithShipment: number
    finalCost: number
    salePrice: number
    offerSale?: OfferSaleAttributes[]
    // This values are going to be updated every time i make a register
    estimatedProfit: number
    totalSales: number
}

export type updateProductDTO = Optional<createProductDTO, 'stock' | 'quantity' | 'sizes' | 'orderCode' | 'underShipment' | 'image' | 'description' | 'sku' | 'sizesAvailable' | 'dollarCost' | 'dollarCostWithDiscount' | 'quetzalCost' | 'subTotalCost' | 'subTotalCostInQuetzales' | 'subTotalCostWithShipment' | 'finalCost' | 'salePrice' | 'offerSale' | 'estimatedProfit' | 'totalSales'>

export type FilterInventoryDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}