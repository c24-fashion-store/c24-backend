import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from './your_sequelize_instance' // Import or create your Sequelize instance

interface QuoteAttributes {
    sku: string
    quantity: number | null
    image: string | null
    description?: string
    size?: string
    price?: number
    price_5_to_8_items?: number
    price_9_or_more_items?: number
    price_16_or_more_items?: number
    customer?: string
    order_confirmation?: boolean
    order_code?: string
    tracking_id?: string
    price_in_pesos?: number
    total_in_pesos?: number
    approximate_weight?: number
    price_in_dollar?: number
    total_dollar?: number
    process_article?: boolean
    processed_date?: Date
    is_in_Guatemala?: boolean
    registered_in_purchases?: boolean
}

interface QuoteCreationAttributes extends Optional<QuoteAttributes, 'sku'> {}

class Quote extends Model<QuoteAttributes, QuoteCreationAttributes> implements QuoteAttributes {
    public sku!: string
    public quantity!: number
    public image!: string
    public description?: string
    public size?: string
    public price?: number
    public price_5_to_8_items?: number
    public price_9_or_more_items?: number
    public price_16_or_more_items?: number
    public customer?: string
    public order_confirmation?: boolean
    public order_code?: string
    public tracking_id?: string
    public price_in_pesos?: number
    public total_in_pesos?: number
    public approximate_weight?: number
    public price_in_dollar?: number
    public total_dollar?: number
    public process_article?: boolean
    public processed_date?: Date
    public is_in_Guatemala?: boolean
    public registered_in_purchases?: boolean

    // Add class-level methods here

}

Quote.init({
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0
    },
    price_5_to_8_items: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0
    },
    price_9_or_more_items: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0
    },
    price_16_or_more_items: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0
    },
    customer: {
        type: DataTypes.STRING
    },
    order_confirmation: {
        type: DataTypes.BOOLEAN
    },
    order_code: {
        type: DataTypes.STRING
    },
    tracking_id: {
        type: DataTypes.STRING
    },
    price_in_pesos: {
        type: DataTypes.DECIMAL(10, 2)
    },
    total_in_pesos: {
        type: DataTypes.DECIMAL(10, 2)
    },
    approximate_weight: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    price_in_dollar: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    total_dollar: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    process_article: {
        type: DataTypes.BOOLEAN
    },
    processed_date: {
        type: DataTypes.DATE
    },
    is_in_Guatemala: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    registered_in_purchases: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Quote',
    // Other model options go here
})

export { Quote }
