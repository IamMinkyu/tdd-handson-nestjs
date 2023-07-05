import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './repository/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './repository/order-repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderRepository]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService, OrderRepository]
})
export class OrdersModule { }
