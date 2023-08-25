import { Router } from "express";
import { LoginController } from "./controllers/authController/LoginController";
import { AuthRegisterController } from "./controllers/authController/RegisterController";
import { CancelCoupomController } from "./controllers/coupomController/CancelCoupomController";
import { UpdateCoupomStatusController } from "./controllers/coupomController/CancelCoupomUpdate";
import { AllProductsController } from "./controllers/productController/GetAllProductController";
import { ProductController } from "./controllers/productController/ProductController";
import { DataSaleController } from "./controllers/salesController/DataSaleController";
import { getNextOrderNumberController } from "./controllers/salesController/OrderController";

const router = Router();

// GET
router.get("/getOrder", new getNextOrderNumberController().handle)
router.get("/cancelCoupom", new CancelCoupomController().handle);
router.get("/getProducts/:ean", new ProductController().handle);
router.get("/getAllProducts", new AllProductsController().handle);

// POST
router.post("/login", new LoginController().handle);
router.post("/register", new AuthRegisterController().handle);
router.post("/dataSale", new DataSaleController().handle);
router.post("/updateCoupomStatus", new UpdateCoupomStatusController().handle);

export { router };

