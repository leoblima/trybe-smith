import express from 'express';
import validationProduct from './middlewares/Product.middleware';
import validationUser from './middlewares/User.middleware';
import ProductController from './controllers/Product.controller';
import UserController from './controllers/User.controller';
import OrderController from './controllers/Order.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.post('/products', validationProduct, productController.create);

app.get('/products', productController.getAll);

app.post('/users', validationUser, userController.create);

app.get('/orders', orderController.getAll);

export default app;
