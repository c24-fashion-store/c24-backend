import * as InventoryDal from '../../db/dal/Inventory'
import { GetAllProductsFilters } from '../../db/dal/types'
import { InventoryAttributes, InventoryOptionalAttrs } from '../../db/models/Inventory'

export const create = (payload: InventoryAttributes): Promise<InventoryAttributes> => {
    return InventoryDal.create(payload)
}

export const update = (code: number, payload: InventoryOptionalAttrs): Promise<InventoryAttributes> => {
    return InventoryDal.update(code, payload)
}

export const getById = (code: number): Promise<InventoryAttributes> => {
    return InventoryDal.getById(code)
}

export const deleteById = (code: number): Promise<boolean> => {
    return InventoryDal.deleteById(code)
}

export const getAll = (filters: GetAllProductsFilters): Promise<InventoryAttributes[]> => {
    return InventoryDal.getAll(filters)
}