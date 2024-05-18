import { Router, Request, Response } from "express";
import * as InventoryController from "../controllers/Inventory/InventoryController";
import { FilterInventoryDTO, createProductDTO } from "../dto/Inventory.dto";



const inventoryRouter = Router()

inventoryRouter.get('/:code', async (req: Request, res: Response) => {
    // get product
    const code = Number(req.params.code)
    const result = await InventoryController.getById(code)
    return res.status(200).send(result)

})

inventoryRouter.put('/:code', () => {
    // update product
})

inventoryRouter.delete('/:code', () => {
    // delete product
})

inventoryRouter.post('/', async (req: Request, res: Response) => {
    // create product
    // const filters: FilterInventoryDTO = req.body
    const payload: createProductDTO = req.body
    const result = await InventoryController.create(payload)
    return res.status(200).send(result)
})

export default inventoryRouter