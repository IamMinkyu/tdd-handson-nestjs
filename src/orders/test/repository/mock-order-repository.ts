import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderStatus, Orders } from "../../entity/orders.entity";

@Injectable()
export class MockOrderRepository {
    
    async getOrders(): Promise<Orders[]> {
        const mockOrders: Orders[] = [
            {
                id: '1', 
                sequence: 1,
                shopName: '교촌치킨 서신점',
                status: OrderStatus.AwaitingPayment,
                userId: 'user-001'
            },
            {
                id: '1', 
                sequence: 2,
                shopName: '피자나라 치킨공주 서신점',
                status: OrderStatus.Completed,
                userId: 'user-001'
            }
        ];
        return  mockOrders;
    }

    async getOrder(orderId: string): Promise<Orders> {
        throw new NotFoundException('주문정보를 찾을 수 없습니다.');
    }
}