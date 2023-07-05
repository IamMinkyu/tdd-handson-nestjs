import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../repository/orders.service';
import { OrderRepository } from '../repository/order-repository';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Orders } from '../entity/orders.entity';
import { MockOrderRepository } from './repository/mock-order-repository';
import { NotFoundException } from '@nestjs/common';

describe('주문 서비스', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(OrderRepository), 
          useClass: MockOrderRepository
        }, 
        OrdersService
      ],
    }).compile();
    service = module.get<OrdersService>(OrdersService);
  });

  it('주문 목록 요청 시, Orders[]를 반환한다.', async () => {
    const orders = await service.find();
    expect(orders.length).toBeGreaterThan(0);
  });

  it('주문id에 해당하는 정보가 없을 경우 NotFound 오류를 발생시킨다.', async () => {
    //Arrange 
    const orderId = '-1';
    
    await expect( async () => {
      await service.findOne(orderId);
    }).rejects.toThrowError(new NotFoundException('주문정보를 찾을 수 없습니다.'));
  });
});
