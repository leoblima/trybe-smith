import connection from '../models/connection';
import OrderModel from '../models/Order.model';
import Order from '../interfaces/Order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAllOrders();
    
    const ordersIds = orders.map((order) => Number(order.id));

    const allInfo = Promise.all(ordersIds.map(async (orderId, index) => {
      const products = await this.model.getProductByOrder(orderId);
      const numbersIds: number[] = products.map((product) => Number(product.id));
      return { ...orders[index], productsIds: numbersIds };
    }));

    return allInfo;
  }
}

export default OrderService;