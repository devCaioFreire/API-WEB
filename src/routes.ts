import { Router } from "express";
import { CancelCoupomController } from "./controllers/coupomController/CancelCoupomController";
import { UpdateCoupomStatusController } from "./controllers/coupomController/CancelCoupomUpdate";
import { DataSaleController } from "./controllers/salesController/DataSaleController";

const router = Router();

// GET
router.get("/cancelCoupom", new CancelCoupomController().handle);

// POST
router.post("/dataSale", new DataSaleController().handle);
router.post("/updateCoupomStatus", new UpdateCoupomStatusController().handle);

export { router };

