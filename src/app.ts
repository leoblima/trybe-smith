import express from 'express';
import validationProduct from './middlewares/Product.middleware';
import validationUser from './middlewares/User.middleware';
import ProductController from './controllers/Product.controller';
import UserController from './controllers/User.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();

app.post('/products', validationProduct, productController.create);

app.get('/products', productController.getAll);

app.post('/users', validationUser, userController.create);

export default app;
