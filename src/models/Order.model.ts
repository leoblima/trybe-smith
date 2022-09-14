import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const orders = await this.connection
      .execute(
        `SELECT id, userId
        FROM Trybesmith.Orders;
        `,
      );

    const result = orders;
    const [rows] = result;
    return rows as Order[];
  }

  public async getProductByOrder(orderId: number): Promise<Order[]> {
    console.log(orderId);
    const productsId = await this.connection
      .execute(`SELECT id
     FROM Trybesmith.Products
     WHERE Trybesmith.Products.orderId = ?
     `, [orderId]);
    const result = productsId;
    const [rows] = result;
    
    return rows as Order[];
  }
}

export default OrderModel;