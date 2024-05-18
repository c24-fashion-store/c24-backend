
import { Sequelize, DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../../config'
import Inventory from '../Inventory'

export interface SizeAttributes {
    isAvailable: boolean
    productCode: string
    size: string
    quantity: number
}

class Size extends Model {
    public isAvailable!: boolean
    public productCode!: string
    public size!: string
    public quantity!: number
}

Size.init({
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    productCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Inventory,
            key: 'code'
        }
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Size'
})

export default Size