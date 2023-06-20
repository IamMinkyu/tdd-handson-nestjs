import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entity/orders.entity';
import { StartOrderService } from './commands/start-order/start-order.service';
import { PlaceOrderService } from './commands/place-order/place-order.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Orders]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService, StartOrderService, PlaceOrderService]
})
export class OrdersModule { }
