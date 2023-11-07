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

//ORDER CONTROLLER
router.get('/cancelCoupom', errorMiddleware.handleAsync(new OrderController().getOrderRealized));
router.get('/getSalesOrders', errorMiddleware.handleAsync(new OrderController().getOrder));
router.get('/getOrder', errorMiddleware.handleAsync(new OrderController().getNextOrderNumberController));
router.get('/getOrderItems', errorMiddleware.handleAsync(new OrderController().getOrderById));
router.post('/dataSale', errorMiddleware.handleAsync(new OrderController().createOrder));
router.post('/updateCoupomStatus', errorMiddleware.handleAsync(new OrderController().CancelOrder));
router.get('/getSalesOrdersByPaymentMethod', errorMiddleware.handleAsync(new OrderController().getOrderByPaymentMethod));

//PRODUCT

router.get('/getLastProduct', errorMiddleware.handleAsync(new ProductController().getLastProduct));
router.get('/getProducts', errorMiddleware.handleAsync(new ProductController().getProducts));
router.get('/getAllProducts', errorMiddleware.handleAsync(new ProductController().getAllProduct));
router.get('/getDescriptionProductFilter',errorMiddleware.handleAsync(new ProductController().getProductByDescription));
router.get('/getEANProductFilter/:ean', errorMiddleware.handleAsync(new ProductController().GetProductByEAN));
router.post('/addProduct', errorMiddleware.handleAsync(new ProductController().addProduct));
router.put('/updateProduct', errorMiddleware.handleAsync(new ProductController().updateProduct));
router.delete('/deleteProduct/:id', errorMiddleware.handleAsync(new ProductController().deleteProduct));

//LOGIN
router.post('/login', new LoginController().handle);
// router.post("/register", new AuthRegisterController().handle);

//BALANCE
router.post('/StockAdjustment', errorMiddleware.handleAsync(new BalanceController().AjusteMovimentacao));
router.post('/StockAdd', errorMiddleware.handleAsync(new BalanceController().EntradaEstoque));

// REGISTER
router.post('/registerUser', errorMiddleware.handleAsync(new RegisterController().handle));
router.post('/registerCompanies', errorMiddleware.handleAsync(new CompanyController().create));

// UPDATE


export { router };

