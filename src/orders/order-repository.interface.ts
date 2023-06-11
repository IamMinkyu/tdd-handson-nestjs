import { Orders } from "./entity/orders.entity";

export interface IOrderRepository {
    find(query?: any): Promise<Orders[]>;
    findOne(id: string): Promise<Orders>;
    postOrder(): Promise<Orders>;
    updateOrder(): Promise<Orders>;
    deleteOrder(id: string): Promise<void>;
}
