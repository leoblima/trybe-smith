import { Request, Response } from 'express';
import ProductService from '../services/Product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    try {
      const product = req.body;
      const productCreated = await this.productService.create(product);
  
      res.status(201).json(productCreated);
    } catch (error) {
      res.status(500).json({ message: 'Internal Error!' });
    }
  };
}

export default ProductController;