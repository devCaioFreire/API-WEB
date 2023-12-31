import { Router } from "express";
import { LoginController } from "./controllers/authController/LoginController";
import { CompanyController } from "./controllers/authController/RegisterCompanyController";
import { RegisterController } from "./controllers/authController/RegisterController";
import { CancelCoupomController } from "./controllers/coupomController/CancelCoupomController";
import { UpdateCoupomStatusController } from "./controllers/coupomController/CancelCoupomUpdate";
import { AddProductController } from "./controllers/productController/AddProductController";
import { DeleteProductController } from "./controllers/productController/DeleteProductService";
import { AllProductsController } from "./controllers/productController/GetAllProductController";
import { getLastProductController } from "./controllers/productController/LastProductController";
import { OrderController } from "./controllers/productController/OrderController";
import { OrderItemsController } from "./controllers/productController/OrderItemsController";
import { ProductController } from "./controllers/productController/ProductController";
import { UpdateProductController } from "./controllers/productController/UpdateProductController";
import { GetDescriptionProductsController } from "./controllers/productController/filter/DescriptionFilterController";
import { GetEANProductsController } from "./controllers/productController/filter/EANFilterController";
import { DataSaleController } from "./controllers/salesController/DataSaleController";
import { getNextOrderNumberController } from "./controllers/salesController/OrderController";
import { ErrorMiddleware } from "./middlewares/errorMiddleware/ErrorMiddleware";

const router = Router();
const errorMiddleware = new ErrorMiddleware();

// GET
router.get("/getOrder", new getNextOrderNumberController().handle)
router.get("/getLastProduct", new getLastProductController().handle)
router.get("/cancelCoupom", new CancelCoupomController().handle);
router.get("/getProducts", errorMiddleware.handleAsync(new ProductController().handle))
router.get("/getSalesOrders", errorMiddleware.handleAsync(new OrderController().handle))
router.get("/getOrderItems", errorMiddleware.handleAsync(new OrderItemsController().handle))
router.get("/getAllProducts", new AllProductsController().handle);
router.get("/getDescriptionProductFilter", new GetDescriptionProductsController().handle);
router.get("/getEANProductFilter/:ean", new GetEANProductsController().handle);

// POST
router.post("/login", new LoginController().handle);
// router.post("/register", new AuthRegisterController().handle);
router.post("/dataSale", new DataSaleController().handle);
router.post("/updateCoupomStatus", new UpdateCoupomStatusController().handle);
router.post("/addProduct", new AddProductController().handle);

// TESTING
router.post("/registerUser", new RegisterController().handle);
router.post("/companies", new CompanyController().create);

// UPDATE
router.post("/updateProduct", new UpdateProductController().handle);

// DELETE
router.delete("/deleteProduct/:id", new DeleteProductController().handle);

export { router };

