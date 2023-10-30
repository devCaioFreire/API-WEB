import { Router } from 'express';
import { LoginController } from './controllers/authController/LoginController';
import { CompanyController } from './controllers/authController/RegisterCompanyController';
import { RegisterController } from './controllers/authController/RegisterController';
import { OrderController } from './controllers/OrderController';
import { ProductController } from './controllers/ProductController';
import { BalanceController } from './controllers/BalanceController';
import { ErrorMiddleware } from './middlewares/errorMiddleware/ErrorMiddleware';


const router = Router();
const errorMiddleware = new ErrorMiddleware();

// GET
router.get('/getOrder', errorMiddleware.handleAsync(new OrderController().getNextOrderNumberController));
router.get('/getLastProduct', errorMiddleware.handleAsync(new ProductController().getLastProduct));
router.get('/cancelCoupom', errorMiddleware.handleAsync(new OrderController().getOrderRealized));
router.get('/getProducts', errorMiddleware.handleAsync(new ProductController().getProducts));
router.get('/getSalesOrders', errorMiddleware.handleAsync(new OrderController().getOrder));
router.get('/getSalesOrdersByPaymentMethod', errorMiddleware.handleAsync(new OrderController().getOrderByPaymentMethod));

// router.get('/getOrderItems', errorMiddleware.handleAsync(new OrderItemsController().handle));

router.get('/getAllProducts', errorMiddleware.handleAsync(new ProductController().getAllProduct));

// router.get('/getDescriptionProductFilter', new GetDescriptionProductsController().handle);
// router.get('/getEANProductFilter/:ean', new GetEANProductsController().handle);

// POST
router.post('/login', new LoginController().handle);
// router.post("/register", new AuthRegisterController().handle);
router.post('/dataSale', errorMiddleware.handleAsync(new OrderController().createOrder));
router.post('/updateCoupomStatus', errorMiddleware.handleAsync(new OrderController().CancelOrder));
router.post('/addProduct', errorMiddleware.handleAsync(new ProductController().addProduct));
router.post('/StockAdjustment', errorMiddleware.handleAsync(new BalanceController().AjusteMovimentacao));
router.post('/StockAdd', errorMiddleware.handleAsync(new BalanceController().EntradaEstoque));

// TESTING
router.post('/registerUser', errorMiddleware.handleAsync(new RegisterController().handle));
router.post('/registerCompanies', errorMiddleware.handleAsync(new CompanyController().create));

// UPDATE
router.put('/updateProduct', errorMiddleware.handleAsync(new ProductController().updateProduct));

// DELETE
router.delete('/deleteProduct/:id', errorMiddleware.handleAsync(new ProductController().deleteProduct));

export { router };

