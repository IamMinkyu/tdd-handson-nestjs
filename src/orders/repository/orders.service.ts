import "reflect-metadata";
import { Inject, Injectable } from '@nestjs/common';
import { Orders } from '../entity/orders.entity';
import { IOrderRepository } from './order-repository.interface';
import { OrderRepository } from "./order-repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrdersService implements IOrderRepository {
    
    
    constructor(
        private orderRepository: OrderRepository
    ) { }

    async find(query?: any): Promise<Orders[]> {
        return this.orderRepository.getOrders();
    }

    async findOne(id: string): Promise<Orders> {
        return this.orderRepository.getOrder(id);
    }

    async postOrder(): Promise<Orders> {
        return null;
    }

    async updateOrder(): Promise<Orders> {
        return null;
    }

    async deleteOrder(id: string): Promise<void> {
        const order = await this.findOne(id);
        this.orderRepository.delete(order);
    }
}
