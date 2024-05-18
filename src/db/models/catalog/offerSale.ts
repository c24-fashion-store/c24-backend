import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config";
import Inventory from "../Inventory";

export interface OfferSaleAttributes {
    value: number
    productCode: string
    initDate?: Date
    dueDate?: Date
}

class OfferSale extends Model {
    public value!: number
    public productCode!: string
    public initDate!: Date
    public dueDate!: Date
}

OfferSale.init({
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    productCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Inventory,
            key: 'code'
        }
    },
    initDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    sequelize: sequelizeConnection,
    modelName: 'OfferSale'
})


export default OfferSale
