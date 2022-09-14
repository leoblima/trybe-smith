import { Request, Response } from 'express';
import OrderService from '../services/Order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    try {
      const orders = await this.orderService.getAll();
      res.status(200).json(orders);   
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong!' });
    }
  };
}

export default OrderController;