import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../config'

export interface OrderAttributes {
    orderCode: string
    account: string
    orderDate: Date
    subtotalDollars?: number
    discountPercentage: number
    totalDollars?: number
    costInQuetzales: number
    currencyExchange: number
    totalItems: number
    totalPounds?: number
    profitUnderOrders?: number
    processingShippingWarrantyCosts?: number
    shippingCostsGuatemala?: number
    importCost?: number
    importCostUnderOrderProfit?: number
    importCostPerItem?: number
    subtractUnderOrderProfit?: boolean
    totalCost?: number
    estimatedSales?: number
    estimatedProfits?: number
    // totalRegisteredItems?: number
}

// interface OrderCreationAttributes extends OrderAttributes { }

// export { OrderAttributes, OrderCreationAttributes };


class Order extends Model { }

Order.init({
    orderCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true, // Assuming 'codigo pedido' is the primary key
    },
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATEONLY, // Assuming the date format is 'YYYY-MM-DD'
        allowNull: false,
    },
    subtotalDollars: {
        type: DataTypes.DECIMAL(12, 2), // Assuming up to 12 digits with 3 decimals for precision
        allowNull: true,
        defaultValue: 0.0
    },
    discountPercentage: {
        type: DataTypes.DECIMAL(12, 3), // Assuming it contains string values like 'Q3.250,00'
        allowNull: true, // Adjust allowNull as per your data
        defaultValue: 0.0
    },
    totalDollars: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0
    },
    costInQuetzales: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    currencyExchange: {
        type: DataTypes.DECIMAL(12, 2), // Assuming it's an integer value
        allowNull: true,
        defaultValue: 1
    },
    totalItems: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPounds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    profitUnderOrders: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    processingShippingWarrantyCosts: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    shippingCostsGuatemala: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    importCost: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0.0
    },
    importCostUnderOrderProfit: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    importCostPerItem: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0.0
    },
    subtractUnderOrderProfit: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    totalCost: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0.0
    },
    estimatedSales: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0.0
    },
    estimatedProfits: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0.0
    },
    /*
    totalRegisteredItems: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },*/
}, {
    sequelize: sequelizeConnection,
    modelName: 'Order',
});

export default Order;
