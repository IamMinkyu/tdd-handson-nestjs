import "reflect-metadata";
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Orders } from '../entity/orders.entity';
import { IOrderRepository } from './order-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersRepositoryService implements IOrderRepository {
    
    
    constructor(@InjectRepository(Orders) private readonly orderRepository: Repository<Orders>) { }

    async find(query?: any): Promise<Orders[]> {
        if (query == null) {
            return await this.orderRepository.find();
        }
        else {
            return await this.orderRepository.find({
                where: query
            });
        }
    }

    async findOne(id: string): Promise<Orders> {
        try {
            return await this.orderRepository.findOneByOrFail({id: id});
        } catch {
            throw new NotFoundException('주문정보를 찾을 수 없습니다.');
        }
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
