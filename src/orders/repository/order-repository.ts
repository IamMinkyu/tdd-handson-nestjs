import { DataSource, EntityRepository, Repository } from "typeorm";
import { Orders } from "../entity/orders.entity";
import { Injectable, NotFoundException } from "@nestjs/common";

@EntityRepository(Orders)
export class OrderRepository extends Repository<Orders> {

    constructor(dataSource: DataSource) {
        super(Orders, dataSource.createEntityManager());
        
    }
    async getOrders(): Promise<Orders[]> {
        return await this.find();
    }

    async getOrder(orderId: string): Promise<Orders | undefined> {
        const order = await this.findOneBy({id : orderId});
        if (order == null) throw new NotFoundException('주문정보를 찾을 수 없습니다.');
        return order;
    }
}