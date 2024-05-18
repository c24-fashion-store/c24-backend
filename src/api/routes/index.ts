import { Router } from "express";
import inventoryRouter from "./Inventory";

const router = Router()

router.use('/inventory', inventoryRouter)

export default router