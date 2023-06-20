import { Test, TestingModule } from '@nestjs/testing';
import { OrdersRepositoryService } from '../repository/orders-repository.service';

describe('OrdersService', () => {
  let service: OrdersRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersRepositoryService],
    }).compile();

    service = module.get<OrdersRepositoryService>(OrdersRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
