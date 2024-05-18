import { Sequelize, DataTypes, Model, Optional } from 'sequelize'
import OfferSale, { OfferSaleAttributes } from './catalog/offerSale'
import sequelizeConnection from '../config'
import Size, { SizeAttributes } from './catalog/Size'

export interface InventoryAttributes {
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
    //timestamps
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

export interface InventoryOptionalAttrs extends Optional<InventoryAttributes, 'stock' | 'quantity' | 'sizes' | 'orderCode' | 'underShipment' | 'image' | 'description' | 'sku' | 'sizesAvailable' | 'dollarCost' | 'dollarCostWithDiscount' | 'quetzalCost' | 'subTotalCost' | 'subTotalCostInQuetzales' | 'subTotalCostWithShipment' | 'finalCost' | 'salePrice' | 'offerSale' | 'estimatedProfit' | 'totalSales'> {}


class Inventory extends Model {
    public code!: string
    public stock!: number
    public quantity!: number
    public sizes!: SizeAttributes[]
    public orderCode!: string
    public underShipment!: boolean
    public image!: string
    public description!: string
    public category!: string
    public sku!: string
    public sizesAvailable!: SizeAttributes[]
    public dollarCost!: number
    public dollarCostWithDiscount!: number
    public quetzalCost!: number
    public subTotalCost!: number
    public subTotalCostInQuetzales!: number
    public subTotalCostWithShipment!: number
    public finalCost!: number
    public salePrice!: number
    public offerSale!: OfferSaleAttributes[]
    // This values are going to be updated every time i make a register
    public estimatedProfit!: number
    public totalSales!: number

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}


Inventory.init({
    code: {
        type: DataTypes.STRING,
        allowNull: false, unique: true,
        primaryKey: true
    },
    // This value would be updated every time a sale its being registered
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // The initial stock
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    underShipment: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dollarCost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0
    },
    dollarCostWithDiscount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0
    },
    quetzalCost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue:0
    },
    subTotalCost: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    subTotalCostInQuetzales: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    subTotalCostWithShipment: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    finalCost: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    salePrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    // This values are going to be updated every time i make a register
    estimatedProfit: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    totalSales: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'Inventory'
})


Inventory.hasMany(Size, { as: 'sizes ' })
Inventory.hasMany(Size, { as: 'sizesAvailable ' })
Inventory.hasMany(OfferSale, { as: 'offerSale ' })

export default Inventory

