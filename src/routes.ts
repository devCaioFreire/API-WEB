import { Router } from "express";
import { DataSaleController } from "./controllers/salesController/DataSaleController";

const router = Router();

router.post("/dataSale", new DataSaleController().handle);

export { router };

