import express from 'express';
import validationProduct from './middlewares/Product.middleware';
import ProductController from './controllers/Product.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();

app.post('/products', validationProduct, productController.create);

app.get('/products', productController.getAll);

export default app;
