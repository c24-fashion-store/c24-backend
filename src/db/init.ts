import Inventory from "./models/Inventory";
import Size from "./models/catalog/Size";
import OfferSale from "./models/catalog/offerSale";

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Inventory.sync({ alter: isDev })
    Size.sync({ alter: isDev })
    OfferSale.sync({ alter: isDev })
}

export default dbInit