import { Router } from "express";
import { DataSaleController } from "./controllers/salesController/DataSaleController";

const router = Router();

router.post("/dataSale", new DataSaleController().handle);

router.get("/test", (req, res) => {
  res.send("Connection established. Server is up and running.");
});

export { router };

