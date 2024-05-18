import * as service from '../../services/InventoryService'
import { createProductDTO, updateProductDTO, FilterInventoryDTO} from '../../dto/Inventory.dto'
import * as mapper from './mapper'
import { InventoryAttributes } from '../../../db/models/Inventory'

export const create = async(payload: createProductDTO): Promise<InventoryAttributes> => {
    return mapper.toInventoryProduct(await service.create(payload))
}
export const update = async (code: number, payload: updateProductDTO): Promise<InventoryAttributes> => {
    return mapper.toInventoryProduct(await service.update(code, payload))
}
export const getById = async (code: number): Promise<InventoryAttributes> => {
    return mapper.toInventoryProduct(await service.getById(code))
}
export const deleteById = async(code: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(code)
    return isDeleted
}
export const getAll = async(filters: FilterInventoryDTO): Promise<InventoryAttributes[]> => {
    return (await service.getAll(filters)).map(mapper.toInventoryProduct)
}