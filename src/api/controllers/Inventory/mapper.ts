import { InventoryAttributes } from '../../../db/models/Inventory'

export const toInventoryProduct = (product: InventoryAttributes): InventoryAttributes => {
    return product
    
    /*
    {
        id: ingredient.id,
        name: ingredient.name,
        slug: ingredient.slug,
        description: ingredient.description,
        foodGroup: ingredient.foodGroup,
        createdAt: ingredient.createdAt,
        updatedAt: ingredient.updatedAt,
        deletedAt: ingredient.deletedAt,
    }*/
}