
import { Op } from "sequelize";
import Inventory from "../models/Inventory";
import { GetAllProductsFilters } from "./types";



export const create = async (payload: any) => {
    // Extract the data to make the relation hasMany
    
    const product = Inventory.create(payload)
    return product
}

export const update = async (code: number, payload: any) => {
    const product = await Inventory.findByPk(code)
    if (!product) {
        throw new Error('Product not found')
    }
    const updatedProduct = await product.update(payload)
    return updatedProduct
}

export const getById = async (code: number) => {
    const product = await Inventory.findByPk(code)
    if (!product) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return product
}

export const deleteById = async (code: number): Promise<boolean> => {
    const deletedProduct = await Inventory.destroy({
        where: {code: code}
    })
    return !!deletedProduct
}

export const getAll = async (filters: GetAllProductsFilters) => {
    return Inventory.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}