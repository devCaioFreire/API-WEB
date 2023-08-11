import { Router } from "express";
import { CancelCoupomController } from "./controllers/coupomController/CancelCoupomController";
import { DataSaleController } from "./controllers/salesController/DataSaleController";

const router = Router();

// GET
router.get("/cancelCoupom", new CancelCoupomController().handle);

// POST
router.post("/dataSale", new DataSaleController().handle);

export { router };

